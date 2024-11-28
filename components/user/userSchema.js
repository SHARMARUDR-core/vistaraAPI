const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName : {
    type : String , 
    required : true 
  } , 
  userEmail :{
    type : String , 
    required : true , 
    unique : true 
  } ,
  Password : {
    type : String , 
    required : true 
  } ,
  orderID : {
    type : mongoose.Schema.Types.ObjectId , 
    ref : 'order'
}
} , { timestamps : true })

const User = new mongoose.model('User', userSchema)

module.exports = User