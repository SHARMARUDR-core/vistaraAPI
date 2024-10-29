require('dotenv').config()


const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const user = require('./components/user/user')
const admin = require('./components/admin/admin')
const items = require('./components/items/items')
const order = require('./components/orders/orders')
const email = require('./components/email/emails')


// connecting to a mongo db 
mongoose.connect(process.env.MONGO_URI)
.then(err => console.error(err))
.then(() => console.log('mogodb connected'))


// middle wares
app.use(cors())
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended : true }));// Parses URL-encoded bodies


// routes
app.use('/admin' , admin)
app.use('/users', user)
app.use('/items' , items )
app.use('/orders' , order)
app.use('/email' , email)



app.listen(process.env.PORT || 8080, () => console.log(`server is listenting on port 8080 ${process.env.PORT}`))