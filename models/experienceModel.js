const mongoose = require('mongoose')
const experienceSchema = new mongoose.Schema(
    {
        year: String,
        company: String,
        mission: String

    }
)

const experienceModel = mongoose.model('Experiences', experienceSchema)
module.exports = experienceModel;