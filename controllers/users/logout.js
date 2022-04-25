const { User } = require('../../models')

const { HTTP_STATUS_CODE } = require('../../libs/constants')

const logout = async (req, res) => {
    const { _id } = req.user
    await User.findByIdAndUpdate(_id, { token: null });

    res
        .status(HTTP_STATUS_CODE.NO_CONTENT)

}

module.exports = logout