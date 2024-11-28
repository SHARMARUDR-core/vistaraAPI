const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    }, 
    price: {
        type: Number, 
        required: true
    }, 
    url: {
        type: String, 
        required: true, 
        unique: true,
        match: /^https?:\/\/[^\s$.?#].[^\s]*$/ // regex to validate URLs
    }, 
    type: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }
});

const Item = mongoose.model('Item', itemSchema);


module.exports = Item;
