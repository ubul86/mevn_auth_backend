const EmailSender = require('./EmailSender');

class RegistrationEmailSender extends EmailSender {
    constructor() {
        super();
        this.subject = 'Welcome to Our Service!';
        this.textTemplate = 'registrationText.ejs';
        this.htmlTemplate = 'registrationHtml.ejs';
    }
}

module.exports = RegistrationEmailSender;