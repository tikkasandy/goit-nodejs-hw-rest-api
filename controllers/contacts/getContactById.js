const { Contact } = require('../../models')

const getContactById = async (req, res, next) => {
    const { id } = req.params
    const result = await Contact.findById(id)

    if (!result) {
        return res
            .status(404)
            .json({ status: 'error', code: 404, message: `Contact with id=${id} not found` })
    }

    res.json({
        status: "success",
        code: 200,
        payload: result
    })
}

module.exports = getContactById