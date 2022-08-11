const mongoose = require("mongoose");

//created a new schema
const HospitalSchema = new mongoose.Schema({
    hospitalID: String,
    name: String,
    service: [Object],
    phone: [String],
    fax: String,
    email: String,
    website: String,
    location: String,
});

module.exports = mongoose.model("Hospital", HospitalSchema);