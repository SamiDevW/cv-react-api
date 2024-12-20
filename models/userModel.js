const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose')
const userSchema = new Schema({
    email: {
        type: String,
        require: [true],
        unique: true
    }
});
userSchema.plugin(passportLocalMongoose)
const userModel = mongoose.model("User", userSchema)
module.exports = userModel;