const mongoose = require('mongoose')
const categorySchema = require('../schema/categorySchema')


const categoryModel = mongoose.model('categorys',categorySchema)


module.exports = categoryModel