const express = require('express');
const { loginUser, refreshToken } = require('../controllers/auth.controller');
const { validateLogin} = require('../validations/auth.validation');


const router = express.Router();

router.post('/login', validateLogin, loginUser);
router.post('/refresh-token', refreshToken);

module.exports = router;