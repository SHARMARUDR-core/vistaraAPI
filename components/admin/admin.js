const express = require('express')
const router = express.Router()
const app = express()
const Admin = require('./adminLoginTimeSchema')

app.use(router);

router.get('/', async (req, res) => {
    const data = await Admin.find({})
    res.send(data)
})

module.exports = router