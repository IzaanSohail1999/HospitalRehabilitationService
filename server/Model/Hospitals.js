const mongoose = require("mongoose");

//created a new schema
const HospitalSchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    phone: String,
    postcode: String,
    website: String,
});

module.exports = mongoose.model("Hospital", HospitalSchema);