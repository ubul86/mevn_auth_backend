const RegistrationService = require('../services/registration.service');
const { validationResult } = require('express-validator');
const registerUser = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
    }

    try {
        await RegistrationService.register(req.body);
        res.status(201).json({ message: 'User registered successfully', data: { success: true} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const activateUser = async (req, res) => {

    const { token } = req.body;
    try {
        await RegistrationService.activate(token);
        res.status(201).json({ message: 'User activated successfully', data: { success: true} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

module.exports = { registerUser, activateUser };