const mongoose = require('mongoose')

const adminLoginTimeSchema = new mongoose.Schema({
    adminName : String
} ,{ timestamps : true })

const Admin = new mongoose.model('Admin', adminLoginTimeSchema)

module.exports = Admin