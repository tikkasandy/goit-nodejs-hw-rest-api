const { User } = require('../../models')
const { sendEmail } = require('../../utils')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const reverifyEmail = async (req, res) => {
    const { email } = req.body
    console.log(email)
    const user = await User.findOne({ email })

    if (!user) {
        return res
            .status(HTTP_STATUS_CODE.NOT_FOUND)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.NOT_FOUND,
                message: `User not found`
            })
    }

    if (user && user.verify) {
        return res
            .status(HTTP_STATUS_CODE.BAD_REQUEST)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.BAD_REQUEST,
                message: `Verification has already been passed`
            })
    }

    await sendEmail(user.email, user.verificationToken)

    res
        .json({
            status: 'success',
            code: HTTP_STATUS_CODE.OK,
            message: 'Verification email sent',
        })
}

module.exports = reverifyEmail