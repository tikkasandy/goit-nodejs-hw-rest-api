const { User } = require('../../models')
const bcrypt = require('bcryptjs')
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
    const result = await User.create({ email, password: hashPassword })

    res
        .status(HTTP_STATUS_CODE.CREATED)
        .json({
            status: 'success',
            code: HTTP_STATUS_CODE.CREATED,
            payload: {
                user: {
                    email: result.email,
                    subscription: result.subscription
                }
            }
        })

}

module.exports = signup