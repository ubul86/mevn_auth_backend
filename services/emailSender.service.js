const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

class EmailSenderService {
    constructor() {
        if (this.constructor === EmailSenderService) {
            throw new Error("Cannot instantiate abstract class EmailSenderService");
        }

        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: null,
            secure: false
        });
    }

    async send(params) {
        const { email, username } = params;

        params.frontend_url = process.env.FRONTEND_URL;

        const mailOptions = {
            from: process.env.FROM_EMAIL,
            to: email,
            subject: this.subject,
            text: await this.renderTemplate(this.textTemplate, params),
            html: await this.renderTemplate(this.htmlTemplate, params)
        };

        return this.transporter.sendMail(mailOptions);
    }

    async renderTemplate(templateFile, params) {
        const templatePath = path.join(__dirname, 'templates', templateFile);
        const template = fs.readFileSync(templatePath, 'utf-8');
        return ejs.render(template, params);
    }
}

module.exports = EmailSenderService;
