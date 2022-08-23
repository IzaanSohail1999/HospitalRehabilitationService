const mongoose = require("mongoose");

//created a new schema
const serviceProviderSchema = new mongoose.Schema({
    name: String,
    postcode: String,
    phone: String,
    website: String,
    ccgboundary: String,
    type: String,
    serviceID: [String]
});

module.exports = mongoose.model("serviceProvider", serviceProviderSchema);