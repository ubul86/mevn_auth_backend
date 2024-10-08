const { body } = require('express-validator');

const validateRegistration = [
    body('username')
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email must be a valid email address'),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/[0-9]/).withMessage('Password must contain at least one number')
        .matches(/[A-Za-z]/).withMessage('Password must contain at least one letter'),
];

module.exports = { validateRegistration };