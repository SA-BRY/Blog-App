const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const blogController = require('../controller/blogController')
const categoryController = require('../controller/categoryController')

router.post('/login',userController.logIn)
router.post('/signup',userController.signUp)
router.get('/getUser/:id',userController.getUser)


router.post('/createBlog',blogController.create)
router.get('/getBlogs',blogController.getBlogs)
router.delete('/deleteBlog/:id',blogController.delete)

router.post('/createCategory',categoryController.create)
router.get('/getCategory',categoryController.getCategory)


module.exports = router