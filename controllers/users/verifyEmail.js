const { User } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params
    const user = await User.findOne({ verificationToken })

    if (!user) {
        return res
            .status(HTTP_STATUS_CODE.NOT_FOUND)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.NOT_FOUND,
                message: `User not found`
            })
    }

    await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: null }, { new: true })

    res
        .json({
            status: 'success',
            code: HTTP_STATUS_CODE.OK,
            message: 'Verification successful',
        }
        )

}

module.exports = verifyEmail