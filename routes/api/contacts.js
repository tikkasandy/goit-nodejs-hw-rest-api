const express = require('express')

const { ctrlWrapper, validation } = require('../../middlewares')
const { joiSchema, joiStatusSchema } = require('../../models/contact');
const { contacts: controllers } = require('../../controllers')

const router = express.Router()

router.get('/', ctrlWrapper(controllers.listContacts))

router.get('/:id', ctrlWrapper(controllers.getContactById))

router.post('/', validation(joiSchema), ctrlWrapper(controllers.addContact))

router.put('/:id', validation(joiSchema), ctrlWrapper(controllers.updateContact))

router.patch('/:id/favorite', validation(joiStatusSchema), ctrlWrapper(controllers.updateStatusContact))

router.delete('/:id', ctrlWrapper(controllers.removeContact))

module.exports = router
