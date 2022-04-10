const express = require('express')

const { ctrlWrapper } = require("../../middlewares")
// const { joiSchema, updateContactsSchema } = require('../../models');
const { controllers } = require('../../controllers')

const router = express.Router()

router.get("/", ctrlWrapper(controllers.listContacts))

router.get('/:id', ctrlWrapper(controllers.getContactById))

// router.post('/', validation(joiSchema), controllers.addContact)

// router.delete('/:id', controllers.removeContact)

// router.put('/:id', validation(updateContactsSchema), controllers.updateContact)

module.exports = router
