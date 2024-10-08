const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth.middleware');
const UserRoutes = require('../models/user.model');

router.get('/get-users', authenticateToken, async (req, res) => {
    try {
        const users = await UserRoutes.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error when fetched users.', error });
    }
});

module.exports = router;
