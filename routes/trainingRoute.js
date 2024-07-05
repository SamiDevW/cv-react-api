const express = require('express')
const trainingModel = require('../models/trainingModel')
const { findById } = require('../models/experienceModel')
const router = express.Router()

router.get('/training', async (req, res) => {
    try {
        const trainings = await trainingModel.find()
        res.status(200).json(trainings)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/training', (req, res) => {
    try {
        const training = req.body
        const trainings = trainingModel.create(training)
        res.status(200).json({
            message: `A training has been added with the establishment ${training.establishment}`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        }
        )
    }
})
router.delete('/training/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedTraining = await trainingModel.findById(id)
        await trainingModel.findByIdAndDelete(id)
        res.status(200).json({
            message: ` A training has been deleted with the establishmen ${deletedTraining.establishment}`
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })

    }

})
module.exports = router