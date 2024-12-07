const express = require('express')
const router = express.Router()
const competenceModel = require('../models/comptenceModel')


router.get('/competence', async (req, res) => {
    const comptences = await competenceModel.find()
    res.json(comptences)

})
router.post('/competence', async (req, res) => {
    const competence = req.body
    const newCompetence = await competenceModel.create(competence)
    res.json({ message: `la comptence ${newCompetence.skill} a été ajouté` })
})
router.delete('/competence/:id', async (req, res) => {
    const { id } = req.params
    const competence = await competenceModel.findById(id)
    await competenceModel.findByIdAndDelete(id)
    res.json({ message: `la comptence ${competence.skill} a été supprimée` })
})
router.get('/competence/:id', async function (req, res) {
    const { id } = req.params
    const oldCompetence = await competenceModel.findById(id)
    res.json(oldCompetence)


})
router.patch('/competence/:id', async (req, res) => {
    try {
        const { id } = req.params
        const competence = req.body
        console.log(competence);
        const updCompetence = await competenceModel.findByIdAndUpdate(id, competence)
        if (!updCompetence) {
            return res.status(400).json({ message: `Can't find the user info with the id ${id}` })
        }
        res.status(200).json(updCompetence)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        console.log(error);
    }
})
module.exports = router;