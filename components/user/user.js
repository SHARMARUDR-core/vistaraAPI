const express = require('express')
const router = express.Router()
const app = express()
const User = require('./userSchema')

app.use(express.json());
app.use(router);

router.get('/', async (req, res) => {
    const data = await User.find({})
    .then(err => res.send('eroor occured - you have to login with diffrent user name'))
    res.send(data)
})

router.get('/:id' , async (req ,res) => {
    const data = await User.find({ _id : req.params.id })
    .then(err => res.send('Error occured - You are requesting for wrong id '))
    res.send(data)
})


router.post('/', async (req, res) => {
    const {userName , Password} = req.body
    const result = await User.create({userName : userName , Password :  Password})
    .then(err => res.send('eroor occured - look like some one already login with same user Name and password'))
    res.json(result)
})


router.delete('/' , async (req,res) => {
    const {userName , Password} = req.body
    const result = await User.deleteOne({userName : userName})
    .then(err => res.send('eroor occured - this user is not in our db'))

    res.send(result.status)
})


router.put('/' , async (req , res) => {
    const {userName , Password , userID} = req.body
    const result = await User.findByIdAndUpdate( userID , {userName : userName , Password : Password})
    .then(err => res.send('try to create new user account'))
    res.send('Your userName and Password has been updated')
})

module.exports = router