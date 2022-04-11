const express = require('express')

const { ctrlWrapper, validation } = require("../../middlewares")
const { joiSchema } = require('../../models');
const { controllers } = require('../../controllers')

const router = express.Router()

router.get("/", ctrlWrapper(controllers.listContacts))

router.get('/:id', ctrlWrapper(controllers.getContactById))

router.post('/', validation(joiSchema), ctrlWrapper(controllers.addContact))

// router.delete('/:id', controllers.removeContact)

// router.put('/:id', validation(updateContactsSchema), controllers.updateContact)

module.exports = router
