const express = require('express');
const { registerUser, activateUser } = require('../controllers/registration.controller');
const { validateRegistration} = require('../validations/registration.validation');


const router = express.Router();

router.post('/register', validateRegistration, registerUser);
router.get('/activation/:token', activateUser);

module.exports = router;