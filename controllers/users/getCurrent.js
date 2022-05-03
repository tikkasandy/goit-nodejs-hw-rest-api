const { HTTP_STATUS_CODE } = require('../../libs/constants')

const getCurrent = async (req, res) => {
    const { email, subscription, avatarURL } = req.user

    res
        .json({
            status: 'success',
            code: HTTP_STATUS_CODE.OK,
            payload: {
                user: {
                    email,
                    subscription,
                    avatarURL
                },
            }
        })
}

module.exports = getCurrent