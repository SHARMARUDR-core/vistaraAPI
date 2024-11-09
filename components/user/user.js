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
        const {userName  , userEmail , Password} = req.body
        const result = await User.create({userName : userName , userEmail : userEmail, Password :  Password})
        res.status(201).json(result)
    } catch {
        res.status(501)
    }
    
})


router.delete('/' , async (req,res) => {
    try{
        const {userName , userEmail , Password} = req.body
        const result = await User.deleteOne({userEmail : userEmail})
        result.status(201)
    } catch {
        res.send('eroor occured - this user is not in our db')
    }
})


router.put('/' , async (req , res) => {
    const {userName ,userEmail, Password , userID} = req.body
    const result = await User.findByIdAndUpdate( userID , {userName : userName , userEmail :userEmail, Password : Password})
    .then(err => res.send('try to create new user account'))
    res.send('Your userName and Password has been updated')
})


router.post('/find' , async (req , res) => {
    try{
        const { email , password } = req.body
        await User.findOne({
            userEmail : email , 
            Password : password
        })
        res.status(201).json({message:"Successfully Registered"})
    } catch {
        res.send('Error Occured')
    }
})
module.exports = router