const mongoose = require('mongoose')
const MongoStore = require('connect-mongo');
require('dotenv').config()
const session_secret = process.env.SESSION_SECRET || 'thisshouldbeasecret';
const store_secret = process.env.STORE_SECRET || 'thisshouldbeasecret';
const dbUrl = process.env.DB
const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: store_secret
    }
});


const sessionConfig = {
    store: store,
    name: 'session',
    secret: session_secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true, // this works only on https
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    },

}
module.exports = { sessionConfig }