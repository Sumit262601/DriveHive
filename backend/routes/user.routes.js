const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller');

router.post('/register', [
    body('email').isEmpty().withMessage('Invaild Email'),
    body('fullname.firstName').isEmpty().withMessage('Invalid First Name'),
    body('passeord').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],

    userController.registerUser
);

module.exports = router;