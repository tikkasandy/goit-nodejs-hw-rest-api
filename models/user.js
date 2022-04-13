const { Schema, model } = require('mongoose')
const Joi = require('joi')

const userSchema = Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
}, { versionKey: false, timestamps: true })

const User = model('user', userSchema)

const joiSchema = Joi.object({
    password: Joi.string()
        .min(6)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    subscription: Joi.string()
        .valid("starter", "pro", "business"),
})

module.exports = {
    User,
    joiSchema,
}