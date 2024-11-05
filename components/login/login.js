const express = require('express')
const Logins = require('./loginSchema')
const app = express()
const router = express.Router()

app.use(router)

router.get('/' , async (req , res) => {
    const data = await Logins.find({})
    .then(res => res.json())
    .then(err => res.send(`Error Occured :- ${err}`))

    if (data.status === 201) res.send(data)
})

router.post('/' , async (req , res) => {
    const { email , password } = req.body
    await Logins.create({
        email : email , 
        password : password
    })
    .then(err => console.error(`EROOR :- ${err}`))
    .then(res.send('Feeling good to see YOU here'))
})

module.exports = router