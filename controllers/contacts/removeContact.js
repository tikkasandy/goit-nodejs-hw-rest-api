const { Contact } = require('../../models')

const removeContact = async (req, res) => {
    const { id } = req.params
    const result = await Contact.findByIdAndRemove(id)

    if (!result) {
        return res
            .status(404)
            .json({
                status: 'error',
                code: 404,
                message: 'Not Found'
            })
    }

    res.json({
        status: 'success',
        code: 200,
        message: `Contact deleted`,
    })
}

module.exports = removeContact