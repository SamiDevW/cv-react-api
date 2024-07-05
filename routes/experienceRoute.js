const express = require('express')
const router = express.Router()
const experienceModel = require('../models/experienceModel')



router.get('/experience', async (req, res) => {
    try {
        const experiences = await experienceModel.find()
        res.status(200).json(experiences)



    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }
})
router.post('/experience', async (req, res) => {
    try {
        const experiences = req.body
        const newExperience = await experienceModel.create(experiences)
        res.status(200).json({ message: `An experience has been added with the company ${newExperience.company}` })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})
router.delete('/experience/:id', async (req, res) => {
    try {
        const { id } = req.params

        const deletedExperience = await experienceModel.findById(id)
        await experienceModel.findByIdAndDelete(id)
        res.status(200).json({ message: `An experience has been deleted with the company ${deletedExperience.company}` })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }
})


module.exports = router
