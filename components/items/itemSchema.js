const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name : {
        type : String , 
        required : true , 
        unique : true 
    } , 
    price : {
        type : Number , 
        required : true 
    } , 
    url : {
        type : String , 
        required : true , 
        unique : true
    } , 
    type : {
        type : String , 
        required : true 
    } , 
    description : {
        type : String , 
        required : true , 
        unique : true
    }
})

const Item = new mongoose.model('Item' , itemSchema)

module.exports = Item