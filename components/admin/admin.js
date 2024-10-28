const express = require('express')
const router = express.Router()
const app = express()
const Admin = require('./adminLoginTimeSchema')

app.use(router);

router.get('/', async (req, res) => {
    const data = await Admin.find({})
    res.send(data)
})


router.post('/' , async (req ,res) => {
    const { adminName } = req.body
    await Admin.create({
        adminName : adminName
    })
    .then(err => console.error(`EROOR :- ${err}`))
    .then(res.send('Feeling good to see YOU here'))
})
module.exports = router