const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    Name : {
        type:String
    }
})


module.exports = categorySchema