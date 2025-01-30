const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(res);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });

    if (isUserAlreadyExist) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstName: fullname.firstName,
        lastName: fullname.lastName,
        email,
        password: hashPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
};