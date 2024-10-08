const EmailSender = require('./EmailSender');

class ActivationEmailSender extends EmailSender {
    constructor() {
        super();
        this.subject = 'Activate Your Account!';
        this.textTemplate = 'activationText.ejs';
        this.htmlTemplate = 'activationHtml.ejs';
    }
}

module.exports = ActivationEmailSender;