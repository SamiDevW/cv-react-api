const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    tel: String,
    adresse: String
})
// const contactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
const contactModel = mongoose.model('Contacts', contactSchema);
module.exports = contactModel;