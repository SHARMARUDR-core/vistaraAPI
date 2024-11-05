const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    email : {
        type : String ,
        required : true ,
        unique : true
    } , 
    password : {
        type : String , 
        required : true
    }
} , { timestamps : true })

const Logins = new mongoose.model('Logins' , LoginSchema)

module.exports = Logins