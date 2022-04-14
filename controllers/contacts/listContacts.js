const { Contact } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const listContacts = async (req, res) => {
    const { _id } = req.user
    const { page = 1, limit = 10 } = req.query
    const skip = (page - 1) * limit

    const contacts = await Contact.find({ owner: _id }, "", { skip, limit: Number(limit) }).populate("owner", "_id email")

    res.json({
        status: 'success',
        code: HTTP_STATUS_CODE.OK,
        payload: contacts
    })
    return contacts
}

module.exports = listContacts