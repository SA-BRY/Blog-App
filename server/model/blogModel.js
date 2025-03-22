const mongoose = require('mongoose')
const blogSchema = require('../schema/blogSchema')


const blogModel = mongoose.model("blogs",blogSchema)



module.exports = blogModel