const mongoose = require("mongoose");

//created a new schema
const serviceSchema = new mongoose.Schema({
    serviceID: String,
    serviceName: String,
    Category: String,
});

module.exports = mongoose.model("service", serviceSchema);