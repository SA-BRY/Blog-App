const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title:{
        type:String
    },
    body:{
        type:String
    },
    date:{
        type:Date
    },
    userId:{
        type:String
    },
    categoryId:{
        type:String
    }
})


module.exports =  blogSchema;