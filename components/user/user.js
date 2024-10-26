const express = require('express')
const router = express.Router()
const app = express()
const User = require('./userSchema')

app.use(express.json());
app.use(router);


router.get('/', async (req, res) => {
    const data = await User.find({})
    res.send(data)
})


router.post('/', async (req, res) => {
    const {userName , Password} = req.body
    await User.create({userName : userName , Password :  Password})
    res.send('your input has been added ')
})


router.delete('/' , async (req,res) => {
    const {userName , Password} = req.body
    const result = await User.deleteOne({userName : userName})
    res.send(result.status)
})


router.put('/' , async (req , res) => {
    const {userName , Password} = req.body
    const result = await User.updateOne({userName : userName , Password : Password})
    res.send('Your userName and Password has been updated')
})

module.exports = router