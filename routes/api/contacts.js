const express = require('express')

const { ctrlWrapper, validation, guard } = require('../../middlewares')
const { joiSchema, joiStatusSchema } = require('../../models/contact')
const { contacts: controllers } = require('../../controllers')

const router = express.Router()

router.get('/', guard, ctrlWrapper(controllers.listContacts))

router.get('/:id', guard, ctrlWrapper(controllers.getContactById))

router.post('/', guard, validation(joiSchema), ctrlWrapper(controllers.addContact))

router.put('/:id', guard, validation(joiSchema), ctrlWrapper(controllers.updateContact))

router.patch('/:id/favorite', guard, validation(joiStatusSchema), ctrlWrapper(controllers.updateStatusContact))

router.delete('/:id', guard, ctrlWrapper(controllers.removeContact))

module.exports = router
