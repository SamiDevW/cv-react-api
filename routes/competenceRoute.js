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
module.exports = router;