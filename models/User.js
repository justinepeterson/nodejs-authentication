const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('user',UserSchema)