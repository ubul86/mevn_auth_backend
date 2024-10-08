const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const registrationRoutes = require('./routes/registration');
const userRoutes = require('./routes/user');
const apiResponseMiddleware = require('./middlewares/apiResponseMiddleware');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/registration', registrationRoutes);
app.use('/api/users', userRoutes);
function errorHandler(err, req, res, next) {
    res.status(400).send({
        success: false,
        message: err.message || 'An error occurred',
        errors: err.errors || null,
    });
}

app.use(apiResponseMiddleware);
app.use(errorHandler);

console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connection to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });