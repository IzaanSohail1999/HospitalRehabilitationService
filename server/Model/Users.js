const mongoose = require("mongoose");

//created a new schema
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    post: String
});

module.exports = mongoose.model("User", UserSchema);