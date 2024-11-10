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
    try{
        const { name , price , url , type , description } =  req.body
        console.log(name , price , url , type , description)
        await Item.create ({
            name : name , 
            price : price , 
            url : url ,
            type : type , 
            description : description
        })
        res.status(201).json('Your item is added successfully')
    } catch {
        res.status(501).json('getting error in adding item')
    }
    
})


router.put('/' , async (req ,res) => {
    const { name , price , url , typeOf , description } =  req.body
    const result = await Item.updateOne ({
        name : name , 
        price : price , 
        url : url ,
        type : typeOf , 
        description : description
    })
    res.send(`${name} has been updated`)
})


router.delete('/' , async (req ,res) => {
    const { name } = req.body 
    const result = await Item.deleteOne({ name : name })
    res.send(result)
})

module.exports = router