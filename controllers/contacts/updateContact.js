const { Contact } = require('../../models')

const updateContact = async (req, res) => {
    const { id } = req.params

    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true })

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
        payload: result
    })
}

module.exports = updateContact