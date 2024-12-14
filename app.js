require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const ExpressError = require('./utils/ExpressError.js')
// SESSION and PASSPORT
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local');
//
const { sessionConfig } = require('./config/sessionConfig.js')
//
const contactRoute = require('./routes/contactRoute')
const skillsRoute = require('./routes/skillsRoute')
const languagesRoute = require('./routes/languagesRoute')
const interetsRoute = require('./routes/interetsRoute')
const experienceRoute = require('./routes/experienceRoute')
const trainingRoute = require('./routes/trainingRoute')
const userRoute = require('./routes/userRoute')
//
const userModel = require('./models/userModel.js');
//

const PORT = process.env.PORT;
mongoose.connect(process.env.DB)
    .then(() => {

        console.log('connexion à la db OK')
    }
    )
    .catch((error) => {
        console.log(error);
    })

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
// SESSION WITH MONGODB
app.use(session(sessionConfig));
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(userModel.authenticate()))
// Store a user  
passport.serializeUser(userModel.serializeUser())
// Unstore a user  
passport.deserializeUser(userModel.deserializeUser())
// app.use((req, res, next) => {
//     res.locals.loggedInUser = req.user; // in every request a response will be stored and sent to the browser
//     next();
// })



app.use('', userRoute)
app.use('', contactRoute)
app.use('', skillsRoute)
app.use('', languagesRoute)
app.use('', interetsRoute)
app.use('', experienceRoute)
app.use('', trainingRoute)
app.all('*', (req, res, next) => {
    // res.send('404')
    next(new ExpressError('Page Not Found', 404))
})
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, something went wrong!'
    res.status(statusCode).json('error', { err })

})
app.listen(PORT, () => {
    console.log(`Server running Ok on port http://localhost:${PORT}`);
})