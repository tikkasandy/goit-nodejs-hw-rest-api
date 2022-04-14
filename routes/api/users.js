const express = require('express')

const { ctrlWrapper, validation, guard } = require('../../middlewares')
const { joiSchema } = require('../../models/user')
const { users: controllers } = require('../../controllers')

const router = express.Router()

router.post('/signup', validation(joiSchema), ctrlWrapper(controllers.signup))

router.post('/login', validation(joiSchema), ctrlWrapper(controllers.login))

router.get('/logout', guard, ctrlWrapper(controllers.logout))

router.get('/current', guard, ctrlWrapper(controllers.getCurrent))

module.exports = router
