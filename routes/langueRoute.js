const express = require('express')
const router = express.Router()
const langueModel = require('../models/langueModel')
router.get('/langues', async (req, res) => {
    const langues = await langueModel.find()
    console.log(langues);
    res.json(langues)
})
router.post('/langues', async (req, res) => {
    const newLangue = req.body
    await langueModel.create(newLangue)
    // res.json(newLangue)
    res.json(`La langue ${newLangue.name} a été ajoutée`)
})
router.delete('/langues/:id', async (req, res) => {
    try {
        const { id } = req.params
        const langue = await langueModel.findById(id)
        await langueModel.findByIdAndDelete(id)
        res.status(200).json(`la comptence ${langue} a été supprimée`)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })

    }

})

module.exports = router;