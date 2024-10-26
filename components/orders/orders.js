const express = require('express')
const router = express.Router()
const app = express()
const Order = require('./orderSchema')

app.use(express.json());
app.use(router);


router.get('/', async (req, res) => {
    const data = await Order.find({})
    res.send(data)
})


module.exports = router