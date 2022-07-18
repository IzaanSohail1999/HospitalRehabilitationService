const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*")
    next();
  });
  
const uri = "mongodb+srv://goodcore:password1999@hospitalrehabilitations.scu8t.mongodb.net/HospitalRehabilitationService";
console.log("Here")

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if (!err) {
        console.log("Connected to MongoDb")
    } else {
        console.log("error")
    }
});

//initialize schema
const Schema = mongoose.Schema;

//created a new schema
const UserSchema = new Schema({
    email: String,
    password: String,
    post: String
});

const UserModel = mongoose.model("User", UserSchema);

app.post("/saveSuperAdmin", async (req, res) => {
    console.log("Inside Post Api")
    console.log(req.body.email)
    console.log(req.body.password)
    console.log(req.body.post)
    
    // const cnic = req.body.email;
    // const users = await UserModel.find({ email });
    // if (users.length === 0) {
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
    // } else {
    //     res.send("email Already Exist in Database")
    // }
});

app.post('/Login',async(req,res)=>{
    if(req.body.email && req.body.password && req.body.post){
        const email = req.body.email;
        const result = await UserModel.find({ email });
        console.log(result.length);
     if(result.length > 0){
         res.status(200).json({
            result: result
        });
     }
     else{
         res.status(404).send('user not found');
     }
    }
    else{
         res.status(406).send('Invalid Information');
    }
 })

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));