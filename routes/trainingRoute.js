const express = require('express')
const trainingModel = require('../models/trainingModel')
const router = express.Router()
const catchAsync = require('../utils/catchAsync.js')
router.get('/training', catchAsync(async (req, res) => {
    try {
        const trainings = await trainingModel.find()
        res.status(200).json(trainings)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}))

router.post('/training', catchAsync(async (req, res) => {
    const training = new trainingModel(req.body)
    await training.save()
    res.status(200).json({
        message: `A training has been added with the establishment ${training.establishment}`
    })

}))
router.delete('/training/:id', catchAsync(async (req, res) => {
    const { id } = req.params
    const deletedTraining = await trainingModel.findById(id)
    await trainingModel.findByIdAndDelete(id)
    res.status(200).json({
        message: ` A training has been deleted with the establishmen ${deletedTraining.establishment}`
    })
}))
module.exports = router