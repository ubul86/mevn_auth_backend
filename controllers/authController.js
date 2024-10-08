const authService = require('../services/authService');
const { validationResult } = require('express-validator');
const loginUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
        const token = await authService.login(username, password);
        res.status(200).json({ message: 'Login successful', data: { token } });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const refreshToken = async (req, res) => {
    const { token } = req.body;
    try {
        const newToken = await authService.refreshToken(token);
        res.status(200).json({ token: newToken });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { loginUser, refreshToken };