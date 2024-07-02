const express = require('express')
const router = express.Router()
const contactModel = require('../models/contactModel')


router.get('/contact', async (req, res) => {
    const contact = await contactModel.find()
    console.log(contact);
    res.json(contact)
})
router.post('/contact', async (req, res) => {
    const newContact = req.body
    await contactModel.deleteOne()
    await contactModel.create(newContact)
    res.json(newContact)
})
module.exports = router