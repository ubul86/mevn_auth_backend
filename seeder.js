const mongoose = require('mongoose');
const User = require('./models/user.model');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        seedData();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

const seedData = async () => {
    try {
        await User.deleteMany();

        await User.create([
            { username: 'testuser1', email: 'test1@example.com', password: 'password123' },
            { username: 'testuser2', email: 'test2@example.com', password: 'password123' }
        ]);

        console.log('Data seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};