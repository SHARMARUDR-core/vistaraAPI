const express = require('express')
const Logins = require('./loginSchema')
const app = express()
const router = express.Router()

app.use(router)

router.get('/' , async (req , res) => {
    try{
        const data = await Logins.find({})
        res.send(data)
    } catch{
        res.send('Error Occured')
    }
    
})

router.post('/' , async (req , res) => {
    try{
        const { email , password } = req.body
        await Logins.create({
            email : email , 
            password : password
        })
        res.status(201).json({message : "Successfully Registered"})
    } catch {
        res.send('Error Occured')
    }
})


module.exports = router