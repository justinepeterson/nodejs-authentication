const router = require('express').Router()
const verify = require('../config/verifiedToken')

router.get('/',verify,(req,res)=>{
    res.json(`Welcome to the Darshoboard`)
})

module.exports = router;