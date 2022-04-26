const path = require('path')
const fs = require('fs/promises')

const { User } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file
    const { _id: id } = req.user
    const imageName = `${id}_${originalname}`
    try {
        const resultUpload = path.join(avatarsDir, imageName)
        await fs.rename(tempUpload, resultUpload)
        const avatarURL = path.join('public', 'avatars', imageName)
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
    // const { _id } = req.user
    // const { subscription } = req.body

    // const result = await User.findOneAndUpdate({ id: _id }, { subscription }, { new: true })

    // if (!result) {
    //     return res
    //         .status(HTTP_STATUS_CODE.NOT_FOUND)
    //         .json({
    //             status: 'error',
    //             code: HTTP_STATUS_CODE.NOT_FOUND,
    //             message: `Not found`
    //         })
    // }

    // res.json({
    //     status: 'success',
    //     code: HTTP_STATUS_CODE.OK,
    //     payload: {
    //         user: {
    //             email: result.email,
    //             subscription: result.subscription
    //         }
    //     }
    // })
}

module.exports = updateAvatar