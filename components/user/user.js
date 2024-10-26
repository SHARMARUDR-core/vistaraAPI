const express = require('express')
const router = express.Router()
const app = express()
const User = require('./userSchema')

app.use(router);

router.get('/', async (req, res) => {
    const data = await User.deleteOne({ name : 'sahil' })
    res.send(data)
})

router.post('/', async (req, res) => {
    const data = await req.body
    console.log(data)
})

module.exports = router