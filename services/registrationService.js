const User = require('../models/User');
const bcrypt = require('bcryptjs');
const RegistrationEmailSender = require('../services/registrationEmailSender')
const crypto = require('crypto');

class RegistrationService {
    async register(userData) {
        const { username, password, email } = userData;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            throw new Error('Username already taken');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const activationToken = crypto.randomBytes(20).toString('hex');

        const newUser = new User({ username, email, password: hashedPassword, activation_token: activationToken });
        await newUser.save();

        const emailSender = new RegistrationEmailSender();
        await emailSender.send(newUser);

        return newUser;
    }

    async activate(token) {
        const user = await User.findOne({ activation_token: token });
        if (!user) {
            return res.status(400).json({ message: 'Invalid activation token.' });
        }

        user.is_activated = true;
        user.activation_token = null;
        await user.save();

        return true;
    }
}

module.exports = new RegistrationService();
