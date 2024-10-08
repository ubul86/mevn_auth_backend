const express = require('express');
const { registerUser, activateUser } = require('../controllers/registrationController');
const { validateRegistration} = require('../validations/registrationValidation');


const router = express.Router();

router.post('/register', validateRegistration, registerUser);
router.get('/activation/:token', activateUser);

module.exports = router;