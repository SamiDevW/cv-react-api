const express = require('express')
const router = express.Router()
const experienceModel = require('../models/experienceModel')
const catchAsync = require('../utils/catchAsync.js')


router.get('/experience', catchAsync(async (req, res) => {
    const experiences = await experienceModel.find()
    res.status(200).json(experiences)
}))
router.post('/experience', catchAsync(async (req, res) => {
    const experiences = req.body
    const newExperience = await experienceModel.create(experiences)
    res.status(200).json({ message: `An experience has been added with the company ${newExperience.company}` })

}))
router.delete('/experience/:id', catchAsync(async (req, res) => {
    const { id } = req.params
    const deletedExperience = await experienceModel.findById(id)
    await experienceModel.findByIdAndDelete(id)
    res.status(200).json({ message: `An experience has been deleted with the company ${deletedExperience.company}` })
}))


module.exports = router
