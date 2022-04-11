const { Contact } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const addContact = async (req, res) => {
    const result = await Contact.create(req.body)

    res.status(HTTP_STATUS_CODE.CREATED).json({
        status: 'success',
        code: HTTP_STATUS_CODE.CREATED,
        payload: result
    })
}

module.exports = addContact