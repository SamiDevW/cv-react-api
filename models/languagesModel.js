const mongoose = require('mongoose');
const languagesSchema = new mongoose.Schema({
    name: String,
    level: String
})

const languagesModel = mongoose.model('Langue', languagesSchema);
module.exports = languagesModel;