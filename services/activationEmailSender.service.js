const EmailSender = require('./emailSender.service');

class ActivationEmailSenderService extends EmailSender {
    constructor() {
        super();
        this.subject = 'Activate Your Account!';
        this.textTemplate = 'activationText.ejs';
        this.htmlTemplate = 'activationHtml.ejs';
    }
}

module.exports = ActivationEmailSenderService;