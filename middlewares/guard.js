const jwt = require("jsonwebtoken")

const { User } = require('../models')

const { HTTP_STATUS_CODE } = require('../libs/constants')

const { SECRET_KEY } = process.env

const guard = async (req, res, next) => {
    const { authorization = "" } = req.headers
    const [bearer, token] = authorization.split(" ")

    if (bearer !== "Bearer" || !verifyToken(token)) {
        return res
            .status(HTTP_STATUS_CODE.UNAUTHORIZED)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.UNAUTHORIZED,
                message: 'Not authorized'
            })
    }

    const { id } = jwt.decode(token)
    const user = await User.findById(id)

    if (!user || user.token !== token) {
        console.log(user.token)
        console.log(token)
        return res
            .status(HTTP_STATUS_CODE.UNAUTHORIZED)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.UNAUTHORIZED,
                message: 'Not authorized'
            })
    }

    req.user = user
    next()
}

const verifyToken = (token) => {
    try {
        return !!jwt.verify(token, SECRET_KEY)
    } catch (error) {
        return false
    }
}

module.exports = guard