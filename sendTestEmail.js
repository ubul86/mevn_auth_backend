const RegistrationEmailSender = require('./services/registrationEmailSender.service');
require('dotenv').config();

const sendTestEmail = async () => {
    const emailSender = new RegistrationEmailSender();

    // Teszt paraméterek
    const params = {
        email: 'recipient@example.com',
        username: 'Test',
        activation_token: 'asdqwe',
    };

    try {
        await emailSender.send(params);
        console.log('Test email sent successfully!');
    } catch (error) {
        console.error('Error occurred while sending test email: ', error.message);
    }
};

sendTestEmail();