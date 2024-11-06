const express = require('express')
const Logins = require('./loginSchema')
const { data } = require('autoprefixer')
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
        const data = await Logins.create({
            email : email , 
            password : password
        })
        data.res.status(201).json(data)
    } catch {
        res.send('Error Occured')
    }
})

router.delete('/' , async (req, res) => {
    try{
        const { _id } = req.body 
        const result = await Logins.deleteOne({_id : _id})
        result.status(201)
    } catch {
        res.send('500')
    }
})

module.exports = router