const { HTTP_STATUS_CODE } = require('../libs/constants')


const validation = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
        next()
    } catch (error) {
        return res
            .status(HTTP_STATUS_CODE.BAD_REQUEST)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.BAD_REQUEST,
                message: error.message
            })
    }
}

module.exports = validation