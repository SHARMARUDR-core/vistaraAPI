require('dotenv').config()

const express = require('express')
const router = express.Router()
const app = express()
const User = require('./userSchema')
const nodemailer = require('nodemailer');
const { IoEarSharp } = require('react-icons/io5')

app.use(express.json());
app.use(router);

router.get('/', async (req, res) => {
        const data = await User.find({});
        res.send(data);
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

        // // create a transporter
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail', // Use your email service (e.g., Gmail, Outlook, etc.)
        //     auth: {
        //       user: process.env.EMAIL_USER, // Your email
        //       pass:  process.env.EMAIL_PASS, // Your email password or app-specific password
        //     },
        //   });
          

        //   // mail options
        //   const mailOptions = {
        //     from:process.env.EMAIL_USER , // Sender's email
        //     to: userEmail, // Receiver's email
        //     subject: 'Hello from Victara', // Email subject
        //     text: 'This is a test email sent to check your valid or not', // Plain text body
        //     html: '<b>This is a test email sent to check your valid or not</b>', // HTML body
        //   };
          
        // //   send email
        //   transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //       console.log('Error occurred:', error);
        //       res.status(301).send('getting error in send email')
        //     } else {
        //       console.log('Email sent:', info.response);
        //     }
        //   });
          const result =  User.create({userName : userName , userEmail : userEmail, Password :  Password})    
          res.send(201).json(result)    
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

module.exports = router