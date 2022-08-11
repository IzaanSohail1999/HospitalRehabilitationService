require('../config');
require('dotenv').config();
const jwt = require('jsonwebtoken');
// app.use(cookieParser());
const Users = require('../Model/Users');
let hash = '';

const login = async (req, res) => {
        if(req.body.email && req.body.password){
            let result = await Users.findOne(req.body).select('-password -email');
            if(result){
                // creating token
                const token = jwt.sign(result._id.toString(),process.env.ACCESS_TOKEN_SECRET);        
                console.log({ result, auth: token });
                res.send({result, auth: token});
            }
            else{
                res.status(404).send({result:'user not found'});
            }
        }
        else{
             res.status(406).send({result:'Invalid Information'});
        }
     }

const ForgetPassword = async(req, res) => {
    if(req.body.email)
    {
        for(i = 0; i < 4 ; i++){
            let x = Math.floor((Math.random() * 9) + 1);
            hash = hash + x.toString();
        }
        console.log(hash);
        sendEmail(req.body.email, hash)
        res.status(200).send({result:'Success'});
    }
    else
    {
        res.status(406).send({result:'Invalid Information'});
    }
}

const verifyToken = async(req, res, next)=>{
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, valid)=>{
            if(err){
                res.status(403).send({result:"Please provide valid Token"});
            }else{
                next();
            }
        });
    }else{
        res.status(401).send({result:"Please provide Token to get access"});
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
    

function sendEmail(email, hash) {
    message = {
        from: "goodcore@gmail.com",
        to: email,
        subject: "Password Reset Link",
        text: "Your OTP is " + hash + "."
    }
    transporter.sendMail(message, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
     })
}

const verifyOTP = async(req, res) =>{
    if(req.body.otp)
    {
        if((req.body.otp.toString()) == hash){
            hash = '';
            res.status(200).send({result:'Success'});
        }
        else
        {
            res.status(406).send({result:'Invalid OTP'});
        }
    }
    else
    {
        res.status(406).send({result:'Missing OTP'});
    }
}

module.exports = { login, ForgetPassword, verifyOTP }