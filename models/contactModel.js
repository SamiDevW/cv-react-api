const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    tel: String,
    adress: String,
    status: String
})
// const contactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
const contactModel = mongoose.model('Contacts', contactSchema);
module.exports = contactModel;