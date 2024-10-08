const express = require('express');
const { registerUser } = require('../controllers/registrationController');
const { validateRegistration} = require('../validations/registrationValidation');


const router = express.Router();

router.post('/register', validateRegistration, registerUser);

module.exports = router;