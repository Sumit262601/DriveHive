const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middlerware');

router.post('/register', [
    body('email').isEmpty().withMessage('Invaild Email'),
    body('fullname.firstName').isEmpty().withMessage('Invalid First Name'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
    userController.registerUser
);

router.post('/login', [
    body('email').isEmpty().withMessage('Invaild Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at lest 6')
],
    userController.loginUser
);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

router.get('/logout', authMiddleware.authUser, userController.logoutUser)

module.exports = router;