const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://root:example@mongodb:27017/¸'

const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log("Connected......")
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users', userRouter)

const userTimingPreferenceRouter = require('./routes/userTimingPreferences')
app.use('/userTimingPreference', userTimingPreferenceRouter)

const suggestTimeRouter = require('./routes/suggestTime')
app.use('/suggested-time', suggestTimeRouter)

app.listen(9000, () => {
    console.log("Server started...")
})