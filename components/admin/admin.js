const express = require('express')
const router = express.Router()
const app = express()
const Admin = require('./adminLoginTimeSchema')

app.use(router);

router.get('/', async (req, res) => {
        const data = await Admin.find({})
        res.status(201).json(data)
    
})


router.post('/' , async (req ,res) => {
    try{
        const { adminName } = req.body
        await Admin.create({
            adminName : adminName
        })
        res.status(201).send('Feeling good to see YOU here')
    } catch {
        res.status(501)
    }
})
module.exports = router