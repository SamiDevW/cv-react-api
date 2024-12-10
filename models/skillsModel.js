const mongoose = require('mongoose');
const competenceSchema = new mongoose.Schema({
    skill: String
})

const competenceModel = mongoose.model('Competences', competenceSchema);
module.exports = competenceModel;