const express = require('express')
const router = express.Router()
const app = express() 
const Item = require('./itemSchema')

app.use(express.json())
app.use(router)


router.get('/' ,async  (req , res) => {
    const data = await Item.find({})
    res.send(data)
})


router.post('/' , async (req ,res) => {
    const { name , price , url , type , description } =  req.body
    const result = await Item.create ({
        name : name , 
        price : price , 
        url : url ,
        type : type , 
        description : description
    })
    .then(err => console.error(err))
    .then(console.log)
    res.send(`${name} has been added `)
})


router.put('/' , async (req ,res) => {
    const { name , price , url , type , description } =  req.body
    const result = await Item.updateOne ({
        name : name , 
        price : price , 
        url : url ,
        type : type , 
        description : description
    })
    res.send(`${name} has been updated`)
})


router.delete('/' , async (req ,res) => {
    const { name } = req.body 
    const result = await Item.deleteOne({ name : name })
    res.send(`${name} has been deleted`)
})

module.exports = router