const express = require('express')
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const languagesModel = require('../models/languagesModel')
router.get('/langues', async (req, res) => {
    const langues = await languagesModel.find()
    console.log(langues);
    res.json(langues)
})
router.post('/langues', catchAsync(async (req, res) => {
    const language = req.body
    await languagesModel.create(language)
    // res.json(language)
    res.json({ message: `The language ${language.name} has been added` })
}))
router.delete('/langues/:id', catchAsync(async (req, res) => {
    const { id } = req.params
    const language = await languagesModel.findById(id)
    await languagesModel.findByIdAndDelete(id)
    res.status(200).json({ message: `The language ${language.name} has been deleted` })

}))

module.exports = router;