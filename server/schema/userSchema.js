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


})


module.exports = userSchema