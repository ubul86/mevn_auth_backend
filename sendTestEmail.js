const RegistrationEmailSender = require('./services/RegistrationEmailSender');
require('dotenv').config();

const sendTestEmail = async () => {
    const emailSender = new RegistrationEmailSender();

    // Teszt paraméterek
    const params = {
        email: 'recipient@example.com',
        username: 'Test'
    };

    try {
        await emailSender.send(params);
        console.log('Test email sent successfully!');
    } catch (error) {
        console.error('Error occurred while sending test email: ', error.message);
    }
};

sendTestEmail();