const express = require('express');
const { loginUser, refreshToken } = require('../controllers/authController');
const { validateLogin} = require('../validations/authValidation');


const router = express.Router();

router.post('/login', validateLogin, loginUser);
router.post('/refresh-token', refreshToken);

module.exports = router;