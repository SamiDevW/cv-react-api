const express = require('express')
const router = express.Router()
const interetsModel = require('../models/interetsModel')
const catchAsync = require('../utils/catchAsync.js')
router.get('/interets', catchAsync(async (req, res) => {
    const interets = await interetsModel.find()
    res.json(interets)

}))
router.post('/interets', catchAsync(async (req, res) => {
    const interets = req.body
    const newInterets = await interetsModel.create(interets)
    res.json(`la comptence ${newInterets} a été ajouté`)
}))
router.delete('/interets/:id', catchAsync(async (req, res) => {
    const { id } = req.params
    const interets = await interetsModel.findById(id)
    await interetsModel.findByIdAndDelete(id)
    res.json(`la comptence ${interets} a été supprimée`)
}))
module.exports = router;