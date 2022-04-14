const { Contact } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const listContacts = async (req, res) => {
    const { _id } = req.user
    const contacts = await Contact.find({ owner: _id }).populate("owner", "_id email")

    res.json({
        status: 'success',
        code: HTTP_STATUS_CODE.OK,
        payload: contacts
    })
    return contacts
}

module.exports = listContacts