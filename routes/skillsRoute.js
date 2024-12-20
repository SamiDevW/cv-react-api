const express = require('express')
const router = express.Router()
const skillsModel = require('../models/skillsModel')
const catchAsync = require('../utils/catchAsync.js')
//
router.route('/skill')
    .get(catchAsync(async (req, res) => {
        const comptences = await skillsModel.find()
        res.json(comptences)

    }))
    .post(catchAsync(async (req, res) => {
        const competence = req.body
        const newCompetence = await skillsModel.create(competence)
        res.json({ message: `The skill ${newCompetence.skill} has been added.` })
    }))
//
router.route('/skill/:id')
    .delete(catchAsync(async (req, res) => {
        const { id } = req.params
        const competence = await skillsModel.findById(id)
        await skillsModel.findByIdAndDelete(id)
        res.json({ message: `The skill ${competence.skill} has been deleted` })
    }))
    .get(catchAsync(async function (req, res) {
        const { id } = req.params
        const oldCompetence = await skillsModel.findById(id)
        res.json(oldCompetence)
    }))
    .patch(catchAsync(async (req, res) => {
        const { id } = req.params
        const competence = req.body
        console.log(competence);
        const updCompetence = await skillsModel.findByIdAndUpdate(id, competence)
        if (!updCompetence) {
            return res.status(400).json({ message: `Can't find the user info with the id ${id}` })
        }
        res.status(200).json(updCompetence)

    }))
module.exports = router;