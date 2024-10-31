const express = require('express')
const router = express.Router()
const app = express()
const User = require('./userSchema')

app.use(express.json());
app.use(router);

router.get('/', async (req, res) => {
    try {
        const data = await User.find({});
        res.send(data);
    } catch (err) {
        res.status(500).send({ error: 'Database error occurred', details: err.message });
    }
});

router.get('/:id' , async (req ,res) => {
    try{
        const data = await User.find({ _id : req.params.id })
        res.send(data)
    }catch (err) {
        res.send('Error occured - You are requesting for wrong id ')
    } 
})


router.post('/', async (req, res) => {
    try{
        const {userName , Password} = req.body
        const result = await User.create({userName : userName , Password :  Password})
        res.json(result)
    } catch {
        res.send('eroor occured - look like some one already login with same user Name and password')
    }
    
})


router.delete('/' , async (req,res) => {
    try{
        const {userName , Password} = req.body
        const result = await User.deleteOne({userName : userName})
    } catch {
        res.send('eroor occured - this user is not in our db')
    }
})


router.put('/' , async (req , res) => {
    const {userName , Password , userID} = req.body
    const result = await User.findByIdAndUpdate( userID , {userName : userName , Password : Password})
    .then(err => res.send('try to create new user account'))
    res.send('Your userName and Password has been updated')
})

module.exports = router