const { Contact } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const addContact = async (req, res) => {
    const { _id } = req.user
    const result = await Contact.create({ ...req.body, owner: _id })

    res.status(HTTP_STATUS_CODE.CREATED).json({
        status: 'success',
        code: HTTP_STATUS_CODE.CREATED,
        payload: result
    })
}

module.exports = addContact