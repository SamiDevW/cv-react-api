const express = require('express')
const introductionModel = require('../models/introductionModel')
const introRoute = express.Router()



introRoute.get('/introduction', async (req, res) => {
    try {
        const introduction = await introductionModel.find()
        res.status(200).json(introduction)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})
introRoute.post('/introduction', async (req, res) => {
    try {
        const newIntro = req.body
        await introductionModel.deleteOne()
        await introductionModel.create(newIntro)
        res.status(200).json({ message: 'Introduction updated' })

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message })
    }
})
module.exports = introRoute;