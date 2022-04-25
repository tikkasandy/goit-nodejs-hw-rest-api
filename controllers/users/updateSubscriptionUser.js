const { User } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const updateSubscriptionUser = async (req, res) => {
    const { _id } = req.user
    const { subscription } = req.body

    const result = await User.findOneAndUpdate({ id: _id }, { subscription }, { new: true })

    if (!result) {
        return res
            .status(HTTP_STATUS_CODE.NOT_FOUND)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.NOT_FOUND,
                message: `Not found`
            })
    }

    res.json({
        status: 'success',
        code: HTTP_STATUS_CODE.OK,
        payload: {
            user: {
                email: result.email,
                subscription: result.subscription
            }
        }
    })
}

module.exports = updateSubscriptionUser