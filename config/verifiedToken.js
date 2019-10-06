//tokenisetion
const jwt = require('jsonwebtoken')

function auth(req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied, You must be logged in to access this materila!..')

    try{
        const verified = jwt.verify(token,process.env.SECRET_TOKEN );
        console.log(verified);
        req.user = verified
        next()
    }catch(error){
        res.status(400).send('Invalid status')
    }
}

module.exports = auth;