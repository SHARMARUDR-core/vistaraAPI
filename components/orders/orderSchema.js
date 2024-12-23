const { populate } = require('dotenv')
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    items : [{
        type : String ,
        required : true
    }], 
    total : {
        type : Number , 
        required : true
    } ,
    userID : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'Users' , 
        required : true
    }
} , { timestamps : true })

const Order = new mongoose.model('Order' , orderSchema)

module.exports = Order