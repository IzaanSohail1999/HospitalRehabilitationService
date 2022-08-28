require('../config');
require('dotenv').config();
const jwt = require('jsonwebtoken');
// app.use(cookieParser());

const ContactUs = async(req, res) => {
    if(req.body.name && req.body.email && req.body.subject && req.body.body)
    {
        sendEmail(req.body.name, req.body.email, req.body.subject, req.body.body)
        res.status(200).send({result:'Success'});
    }
    else
    {
        res.status(406).send({result:'Invalid Information'});
    }
}

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
        user: "24bf5736da2cf2",
        pass: "0670d8d721aed5"
        }
})
    

function sendEmail(name, email, subject, body) {
    message = {
        from: email,
        to: "goodcore@gmail.com",
        subject: subject,
        text: "Email from " + name + " with content " + body
    }
    transporter.sendMail(message, function(err, info) {
     })
}

module.exports = { ContactUs }