const router = require('express').Router()
const verify = require('../config/verifiedToken')

const posts = {
    title:"Holla mundo mi nombre justine Peterson",
    post:"This is my first post"
}

router.get('/',verify,(req,res)=>{
    res.json(`Title: ${posts.title}, Post:${posts.post}`)
})

module.exports = router;