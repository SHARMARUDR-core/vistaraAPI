require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./components/user/user')
const admin = require('./components/admin/admin')
const cors = require('cors')


mongoose.connect(process.env.MONGO_URI)
.then(err => console.error(err))
.then(() => console.log('mogodb connected'))


// middle wares
app.use(cors())
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: true }));// Parses URL-encoded bodies

// routes
app.use('/admin' , admin)
app.use('/user', user)


app.listen(process.env.PORT || 8080, () => console.log(`server is listenting on port 8080 ${process.env.PORT}`))
