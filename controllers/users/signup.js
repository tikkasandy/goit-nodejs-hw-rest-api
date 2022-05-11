const bcrypt = require('bcryptjs')
const { nanoid } = require("nanoid")

const { User } = require('../../models')
const { sendEmail } = require('../../utils')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const signup = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user) {
        return res
            .status(HTTP_STATUS_CODE.CONFLICT)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.CONFLICT,
                message: `Email in use`
            })
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    const verificationToken = nanoid()

    const result = await User.create({ email, password: hashPassword, verificationToken })

    await sendEmail(email, verificationToken)

    res
        .status(HTTP_STATUS_CODE.CREATED)
        .json({
            status: 'success',
            code: HTTP_STATUS_CODE.CREATED,
            payload: {
                user: {
                    email: result.email,
                    subscription: result.subscription,
                    avatarURL: result.avatarURL,
                }
            }
        })
}

module.exports = signup