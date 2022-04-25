const { Contact } = require('../../models')
const { HTTP_STATUS_CODE } = require('../../libs/constants')

const listContacts = async (req, res) => {
    const { _id } = req.user
    const { page = 1, limit = 20 } = req.query
    const skip = (page - 1) * limit

    let contacts = null

    if (req.query.favorite) {
        contacts = await Contact.find({ favorite: true, owner: _id }).skip(skip)
            .limit(Number(limit))
    } else {

        contacts = await Contact.find({ owner: _id })
            .skip(skip)
            .limit(Number(limit))
    }

    res.json({
        status: 'success',
        code: HTTP_STATUS_CODE.OK,
        payload: contacts
    })
    return contacts
}

module.exports = listContacts