const express = require('express')

const { ctrlWrapper, validation, guard, limiter, upload } = require('../../middlewares')
const { joiSchema, joiSubscriptionSchema } = require('../../models/user')
const { users: controllers } = require('../../controllers')

const router = express.Router()

router.post('/signup', limiter(15 * 60 * 1000, 10), validation(joiSchema), ctrlWrapper(controllers.signup))

router.post('/login', validation(joiSchema), ctrlWrapper(controllers.login))

router.get('/logout', guard, ctrlWrapper(controllers.logout))

router.get('/current', guard, ctrlWrapper(controllers.getCurrent))

router.patch('/', guard, validation(joiSubscriptionSchema), ctrlWrapper(controllers.updateSubscriptionUser))

router.patch('/avatars', guard, upload.single("avatar"), ctrlWrapper(controllers.updateAvatar))

module.exports = router
