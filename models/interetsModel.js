const mongoose = require('mongoose');
const interetsSchema = new mongoose.Schema({
    activity: String
})

const interetsModel = mongoose.model('Interets', interetsSchema);
module.exports = interetsModel;