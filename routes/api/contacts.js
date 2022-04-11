const express = require('express')

const { ctrlWrapper, validation } = require('../../middlewares')
const { joiSchema } = require('../../models');
const { controllers } = require('../../controllers')

const router = express.Router()

router.get('/', ctrlWrapper(controllers.listContacts))

router.get('/:id', ctrlWrapper(controllers.getContactById))

router.post('/', validation(joiSchema), ctrlWrapper(controllers.addContact))

router.put('/:id', validation(joiSchema), ctrlWrapper(controllers.updateContact))

router.delete('/:id', ctrlWrapper(controllers.removeContact))

module.exports = router
