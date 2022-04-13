const express = require('express')

const { ctrlWrapper, validation } = require('../../middlewares')
const { joiSchema } = require('../../models/user');
const { users: controllers } = require('../../controllers')

const router = express.Router()

router.post('/signup', validation(joiSchema), ctrlWrapper(controllers.signup))

module.exports = router
