const express = require('express')
const router = express.Router()
const app = express()
const Order = require('./orderSchema');
const User = require('../user/userSchema');

app.use(express.json());
app.use(router);


router.get('/', async (req, res) => {
    const data = await Order.find({})
    res.send(data)
})

router.post('/' , async (req, res) => {
    const { items , total , userID } = req.body
    await Order.create({
        items : items , 
        total : total , 
        userID : userID
    })
    .then(err => res.status(500).json({ error: `Something went wrong! ${err}` }))

    const userData = await User.findById({_id : userID })
    res.send(`Thankyou to order ${userData.userName}`)
})


module.exports = router