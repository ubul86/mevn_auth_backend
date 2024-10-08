const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class RegistrationService {
    async register(userData) {
        const { username, password, email } = userData;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            throw new Error('Username already taken');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        return newUser;
    }
}

module.exports = new RegistrationService();
