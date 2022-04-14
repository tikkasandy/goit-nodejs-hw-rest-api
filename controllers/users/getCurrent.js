// const { User } = require('../../models')

const { HTTP_STATUS_CODE } = require('../../libs/constants')

const getCurrent = async (req, res) => {
    const { email, subscription } = req.user;
    res
        .json({
            status: 'success',
            code: HTTP_STATUS_CODE.OK,
            payload: {
                user: {
                    email,
                    subscription
                },
            }
        })
}

module.exports = getCurrent