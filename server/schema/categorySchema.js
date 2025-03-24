const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    categoryname : {
        type:String
    }
})


module.exports = categorySchema