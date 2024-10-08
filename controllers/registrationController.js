const authService = require('../services/registrationService');
const { validationResult } = require('express-validator');
const registerUser = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
    }

    try {
        await authService.register(req.body);
        res.status(201).json({ message: 'User registered successfully', data: { success: true} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerUser };