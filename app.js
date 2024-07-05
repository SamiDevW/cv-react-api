const express = require('express')
const app = express()
const mongoose = require('mongoose')
const contactRoute = require('./routes/contactRoute')
const competenceRoute = require('./routes/competenceRoute')
const langueRoute = require('./routes/langueRoute')
const interetsRoute = require('./routes/interetsRoute')
const experienceRoute = require('./routes/experienceRoute')
const trainingRoute = require('./routes/trainingRoute')
const cors = require('cors')

require('dotenv').config()
console.log(process.env.PORT);
const PORT = process.env.PORT;


mongoose.connect(process.env.DB)
    .then(() => {

        console.log('connexion à la db OK')
    }
    )
    .catch((error) => {
        console.log(error);
    })



app.listen(PORT, () => {
    console.log(`Server running Ok on port http://localhost:${PORT}`);
})

app.use(cors())
app.use(express.json())
app.use('', contactRoute)
app.use('', competenceRoute)
app.use('', langueRoute)
app.use('', interetsRoute)
app.use('', experienceRoute)
app.use('', trainingRoute)

