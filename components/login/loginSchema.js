const mongoose = require('mongoose')

const LoginSchema = mongoose.Schema({
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

const Logins = mongoose.model('Logins' , LoginSchema)

module.exports = Logins