const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
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
    avatarURL: {
        type: String,
        default: function () {
            return gravatar.url(this.email, { s: '250' }, true)
        }
    },
    token: {
        type: String,
        default: null,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    },
}, { versionKey: false, timestamps: true })

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

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

const joiSubscriptionSchema = Joi.object({
    subscription: Joi
        .valid("starter", "pro", "business")
        .required()
        .messages({
            'any.required': `Missing field subscription`
        }),
})

const joiReverifyEmailSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'any.required': `Missing field email`
        }),
})

module.exports = {
    User,
    joiSchema,
    joiSubscriptionSchema,
    joiReverifyEmailSchema
}