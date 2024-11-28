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


router.post('/', async (req, res) => {
    try {
        const { name, price, url, type, description } = req.body;

        // Logging received data
        console.log(name, price);

        // Create the item
        const newItem = await Item.create(req.body)

        // Responding with success message and item details
        res.status(201).json({ message: 'Your item is added successfully', item: newItem });
    } catch (err) {
        // Logging the error
        console.error('Error adding item:', err);

        // Sending error response
        res.status(500).json({ message: 'Error adding item', error: err.message });
    }
});



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