const { Contact } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const removeContact = async (req, res) => {
    const { id } = req.params
    const { _id } = req.user

    const result = await Contact.findOneAndRemove({ _id: id, owner: _id })

    if (!result) {
        return res
            .status(HTTP_STATUS_CODE.NOT_FOUND)
            .json({
                status: 'error',
                code: HTTP_STATUS_CODE.NOT_FOUND,
                message: `Contact with id=${id} not found`
            })
    }

    res.json({
        status: 'success',
        code: HTTP_STATUS_CODE.OK,
        message: `Contact with id=${id} deleted`,
    })
}

module.exports = removeContact