const mongoose = require("mongoose");

//created a new schema
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    hospital: String,
    departement: String,
    email: String,
    password: String,
    role: String
});

module.exports = mongoose.model("User", UserSchema);