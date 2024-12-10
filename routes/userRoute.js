const express = require('express')
const userModel = require('../models/userModel')
const router = express.Router()
const passport = require('passport')

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const { email, password, username } = req.body;
        const user = new userModel({ email, username })
        const registeredUser = await userModel.register(user, password)
        res.json(registeredUser)

    } catch (error) {
        console.log(error.message);

    }

})
// WE USE PASSPORT TO AUTHENTICATE
// we specify the strategy which is local :
// if we make it to the res means it worked
router.post('/login', passport.authenticate('local', { failureRedir: '/login' }), async (req, res) => {
    res.json({ isLoggedIn: true, message: 'Logged in successfully' })
    // 
})




















module.exports = router;