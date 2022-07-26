require('./config');
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Users = require('./Schema/Users');
const jwt = require('jsonwebtoken');
let hash = '';

app.use(express.json());
// app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*")
    next();
  });
  
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
        user: "24bf5736da2cf2",
        pass: "0670d8d721aed5"
        }
})

const verifyToken = (req, res, next)=>{
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

app.post("/saveSuperAdmin", async (req, res) => {
    console.log("Inside Post Api")
    console.log(req.body.email)
    console.log(req.body.password)
    console.log(req.body.role)
    
        try {
            const user = new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                hospital: req.body.hospital,
                departement: req.body.departement, 
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            })

            await user.save();
            res.send("User Data Saved");
        } catch (error) {
            return error;
        }
});


app.post("/saveUser", async (req, res) => {
    console.log("Inside Post Api")
    console.log(req.body)
    
        try {
            const user = new Users({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                hospital: req.body.hospital,
                departement: req.body.departement, 
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            })

            await user.save();
            res.send("User Data Saved");
        } catch (error) {
            return error;
        }
});

app.post('/Login', async(req,res)=>{
    if(req.body.email && req.body.password)
    {
        console.log(req.body);
        let result = await Users.findOne(req.body).select('-password -email');
        console.log(result)
        if(result){
            // creating token
            const token = jwt.sign(result._id.toString(),process.env.ACCESS_TOKEN_SECRET);        
            res.send({result, auth: token});
        }
        else{
            res.status(404).send({result:'user not found'});
        }
    }
    else{
         res.status(406).send({result:'Invalid Information'});
    }
 })

 app.post('/ForgetPassword',async(req,res)=>{
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
 })

 app.post('/verifyOTP',async(req,res)=>{
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
 })

app.get("/getUser", async (req, res) => {
    console.log("Inside Get User Api")
    console.log(typeof(req.query.email));
    const param = req.query.email;
    console.log(param)
    try {
        const user = await Users.find();
        if (user.length > 0) {
            res.status(200).json({
                user: user
            });
        } else (
            res.status(404).send({msg: "User Not Found"})
        )
    } catch (error) {
        return error;
    }
});

app.put("/updatePassword", async (req, res) => {
    console.log("Inside Put Function")
    const email = req.body.email;
    console.log(req.body)
    try {
        const update = {
             $set: 
                { 
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    hospital: req.body.hospital,
                    departement: req.body.departement, 
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                } 
            };
        const filter = { email: email };
        console.log(filter)
        await Users.updateOne(filter, update);
        res.send("User Data Updated");
    } catch (error) {
        return error;
    }
});

// app.post('/changePassword',async(req,res)=>{
//     if(req.body.password)
//     {
//         if(){
//             hash = '';
//             res.status(200).send({result:'Success'});
//         }
//         else
//         {
//             res.status(406).send({result:'Invalid OTP'});
//         }
//     }
//     else
//     {
//         res.status(406).send({result:'Missing Password'});
//     }
//  })


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

//  function setupRoutes() {
//     const routes = require("./routes");
//     routes.setup(app);
  
//     app.use(function(err, req, res, next) {
//       res.status(err.headerStatus || err.status || 403);
//       res.send({
//         status: err.status || 403,
//         message: err.message || err,
//         data: err.data || {}
//       });
//     });
  
//     // catch 404 and forward to error handler
//     app.use(function (req, res, next) {
//       res.status(200);
//       // res.sendFile(path.join(__dirname + '/index.html'));
//       res.sendFile('index.html', { root: path.join(__dirname, '../public') });
//   });
// }

// sendEmail()

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));