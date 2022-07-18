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
  
const uri = "mongodb+srv://goodcore:password123@hospitalrehabilitations.scu8t.mongodb.net/HospitalRehabilitationService";
console.log("Here")

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if (!err) {
        console.log("Connected to MongoDb")
    } else {
        console.log("error")
    }
});