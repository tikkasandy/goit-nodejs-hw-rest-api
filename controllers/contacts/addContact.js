const { Contact } = require('../../models')

const addContact = async (req, res) => {
    const result = await Contact.create(req.body)

    res.json({
        status: 'success',
        code: 201,
        payload: result
    })
}

module.exports = addContact