const express = require('express')
const router = express.Router()
const contactModel = require('../models/contactModel')
const catchAsync = require('../utils/catchAsync.js')

router.get('/contact', catchAsync(async (req, res) => {
    const contact = await contactModel.find()
    res.json(contact);
}))
router.post('/contact', catchAsync(async (req, res) => {
    const newContact = req.body;
    await contactModel.deleteOne();
    await contactModel.create(newContact);
    res.json({ message: 'Contacts updated' });
}))
module.exports = router;