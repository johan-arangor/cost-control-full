require('dotenv').config();
const { APP_USER, APP_PASSWORD } = process.env;
const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: '465',
    secure: true, //if port is 465 use true
    auth: {
        user: APP_USER,
        pass: APP_PASSWORD
    }
});

module.exports = transporter;