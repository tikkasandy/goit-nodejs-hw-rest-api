const { Schema, model } = require('mongoose')
const Joi = require("joi")

const contactSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'any.required': `missing required {{#label}} field`
        }),
    email: Joi.string()
        .email(),
    phone: Joi.string()
        .min(3)
        .max(20)
        .pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,14}(\s*)?$/),
    favorite: Joi.bool()
})
    .or('email', 'phone')

// const updateContactsSchema = Joi.object({
//     name: Joi.string()
//         .min(3)
//         .max(30),
//     email: Joi.string()
//         .email(),
//     phone: Joi.string()
//         .min(3)
//         .max(20)
//         .pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,14}(\s*)?$/),
//     favorite: Joi.bool()
// }).min(1)
//     .messages({
//         'object.min': "missing fields"
//     })

const Contact = model("contact", contactSchema)

module.exports = {
    Contact,
    joiSchema,
    // updateContactsSchema
}