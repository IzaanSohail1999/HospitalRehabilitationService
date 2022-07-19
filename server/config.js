const uri = "mongodb+srv://goodcore:password1999@hospitalrehabilitations.scu8t.mongodb.net/HospitalRehabilitationService";
const mongoose = require('mongoose');
console.log("Here")

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if (!err) {
        console.log("Connected to MongoDb")
    } else {
        console.log("error")
    }
});