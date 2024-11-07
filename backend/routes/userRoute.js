const { signup, login } = require('../controllers/authController')
const { signupValidation, loginValidation } = require('../middleware/authValidation')

const router = require('express').Router()

router.get('/signup',signupValidation, signup)

router.get('/login',loginValidation, login)


module.exports = router