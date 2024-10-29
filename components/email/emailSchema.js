const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
    senderEmail : {
        type : String, 
        required :true
    } , 
    senderName : {
        type : String,
        required : true
    } ,
    message : {
        type : String , 
        required : true
    }
} , { timestamps : true }) 

const Emails = new mongoose.model('Emails' , emailSchema )

module.exports = Emails
