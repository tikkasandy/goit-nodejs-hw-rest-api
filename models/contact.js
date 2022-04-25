const { Schema, model } = require('mongoose')
const Joi = require('joi')

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
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
}, { versionKey: false, timestamps: true })

const Contact = model('contact', contactSchema)

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

const joiStatusSchema = Joi.object({
    favorite: Joi.bool()
        .required()
        .messages({
            'any.required': `missing field favorite`
        }),
})

module.exports = {
    Contact,
    joiSchema,
    joiStatusSchema
}