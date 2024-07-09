const mongoose = require('mongoose')
const introductionSchema = mongoose.Schema({
    introText: String
})

const introductionModel = mongoose.model('Introduction', introductionSchema)

module.exports = introductionModel