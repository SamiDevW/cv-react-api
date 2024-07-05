const mongoose = require('mongoose')

const trainingSchema = mongoose.Schema({
    year: String,
    establishment: String,
    degree: String

})

const trainingModel = mongoose.model('Trainings', trainingSchema)

module.exports = trainingModel