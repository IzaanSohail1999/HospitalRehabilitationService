require('./config');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Users = require('./Schema/Users');

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*")
    next();
  });

app.post("/saveSuperAdmin", async (req, res) => {
    console.log("Inside Post Api")
    console.log(req.body.email)
    console.log(req.body.password)
    console.log(req.body.post)
    
        try {
            const user = new UserModel({
                email: req.body.email,
                password: req.body.password,
                post: req.body.post
            })

            await user.save();
            res.send("User Data Saved");
        } catch (error) {
            return error;
        }
});

app.post('/Login',async(req,res)=>{
    if(req.body.email && req.body.password){
     let result = await Users.findOne(req.body).select('-password -email');
     if(result){
         res.send(result);
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
    if(req.body.content && req.body.subject){
        sendEmail(req.body.subject, req.body.content)
        res.status(406).send({result:'Success'});
    }else{
         res.status(406).send({result:'Invalid Information'});
    }
 })

    const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
             host: 'smtp.mailtrap.io',
             port: 2525,
             auth: {
                user: "24bf5736da2cf2",
                pass: "0670d8d721aed5"
             }
     })

     function sendEmail(subject, content) {
        message = {
            from: "from-example@email.com",
            to: "to-example@email.com",
            subject: subject,
            text: content
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