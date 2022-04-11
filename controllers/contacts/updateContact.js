const { Contact } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const updateContact = async (req, res) => {
    const { id } = req.params

    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true })

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
        payload: result
    })
}

module.exports = updateContact