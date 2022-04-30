const path = require('path')
const fs = require('fs/promises')
const Jimp = require('jimp')

const { User } = require('../../models')
const { HTTP_STATUS_CODE, FOLDER } = require('../../libs/constants')

const avatarsDir = path.join(__dirname, '../../', FOLDER.AVATAR)

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file

    await transformAvatar(tempUpload)

    const { _id: id } = req.user
    const imageName = `${id}_${originalname}`
    try {
        const resultUpload = path.join(avatarsDir, imageName)
        await fs.rename(tempUpload, resultUpload)
        const avatarURL = path.join(FOLDER.AVATAR, imageName)
        await User.findByIdAndUpdate(req.user._id, { avatarURL })

        res.json({
            status: 'success',
            code: HTTP_STATUS_CODE.OK,
            payload: {
                avatarURL
            }
        })

    } catch (error) {
        await fs.unlink(tempUpload)
        console.log(error)
    }
}

const transformAvatar = async (pathFile) => {
    const avatar = await Jimp.read(pathFile)
    await avatar
        .autocrop()
        .cover(
            250,
            250,
            Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE,
        )
        .writeAsync(pathFile)
}

module.exports = updateAvatar