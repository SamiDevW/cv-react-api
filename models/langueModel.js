const mongoose = require('mongoose');
const langueSchema = new mongoose.Schema({
    name: String,
    level: String
})

const langueModel = mongoose.model('Langue', langueSchema);
module.exports = langueModel;