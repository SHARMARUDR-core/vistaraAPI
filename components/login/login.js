const express = require('express')
const Logins = require('./loginSchema')
const app = express()
const router = express.Router()

app.use(router)

router.get('/' , async (req , res) => {
    const data = await Logins.find({})
    res.send(data)    
})

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await Logins.create({ email, password });
        res.status(201).json({ message: 'User created successfully', data });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: 'An error occurred during creation' });
    }
});


router.delete('/' , async (req, res) => {
    try{
        const { _id } = req.body 
        const result = await Logins.deleteOne({_id : _id})
        res.status(201).json({ message: 'User deleted successfully', data });
    } catch {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: 'An error occurred during creation' });
    }
})

module.exports = router