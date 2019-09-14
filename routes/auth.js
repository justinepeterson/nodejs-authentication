const router = require('express').Router();

router.post('/register',(req,res)=>{
    res.send('Register')
    console.log('Register')
})

module.exports = router;