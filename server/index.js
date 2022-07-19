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

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));