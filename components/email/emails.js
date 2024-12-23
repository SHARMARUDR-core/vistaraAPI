const express = require('express')
const mongoose = require('mongoose')
const Emails = require('./emailSchema')
const router = express.Router()
const app = express()

app.use(express.json());
app.use(router)

router.get('/' , async (req ,res) => {
    const data = await Emails.find({})
    await res.send(data)
})

router.post('/' , async (req ,res) => {
    const { senderName , senderEmail , message } = req.body 
    const result = await Emails.create({
        senderName : senderName , 
        senderEmail : senderEmail , 
        message : message
    })
    if (result.errord) res.status(501).json('server error')

    res.send('Thankyou for your response')
})

module.exports = router