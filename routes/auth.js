const router = require('express').Router();
const {login, signUp, verifyToken, forgotPassword, resetPassword, resetPasswordToken, generatePassword} = require('../controllers/auth')

router.post('/login', login)
router.post('/sign-up', signUp)
router.post('/verify-token', verifyToken)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)
router.post('/reset-password/:token', resetPasswordToken)
router.post('/generate-password', generatePassword)

module.exports = router