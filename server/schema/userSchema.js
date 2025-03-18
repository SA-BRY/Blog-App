const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    state:{
        type:Boolean
    },
    lastlogin:{
        type:Date
    },
    createdat:{
        type:Date
    }

})


module.exports = userSchema