const { Contact } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const listContacts = async (req, res) => {
    const contacts = await Contact.find({})

    res.json({
        status: 'success',
        code: HTTP_STATUS_CODE.OK,
        payload: contacts
    })
    return contacts
}

module.exports = listContacts