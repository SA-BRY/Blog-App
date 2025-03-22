const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const blogController = require('../controller/blogController')

router.post('/login',userController.logIn)
router.post('/signup',userController.signUp)


router.post('create',blogController.create)
router.delete('deleteBlog',blogController.delete)



module.exports = router