const jwt = require('jsonwebtoken')

const { User } = require('../../models')

const { HTTP_STATUS_CODE } = require('../../libs/constants')

const { SECRET_KEY } = process.env

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !user?.verify || !user?.validPassword(password)) {
        return res
            .status(HTTP_STATUS_CODE.UNAUTHORIZED)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.UNAUTHORIZED,
                message: `Email is wrong or not verify, or password is wrong`
            })
    }

    const payload = {
        id: user._id
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })

    await User.findByIdAndUpdate(user._id, { token }, { new: true })

    res
        .json({
            status: 'success',
            code: HTTP_STATUS_CODE.OK,
            payload: {
                token,
                user: {
                    email: user.email,
                    subscription: user.subscription,
                    avatarURL: user.avatarURL
                }
            }
        })
}

module.exports = login