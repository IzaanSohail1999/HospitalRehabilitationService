const mongoose = require("mongoose");

//created a new schema
const serviceProviderSchema = new mongoose.Schema({
    providerID: String,
    providerName: String,
    service: [String]
});

module.exports = mongoose.model("serviceProvider", serviceProviderSchema);