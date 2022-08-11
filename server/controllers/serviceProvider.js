require('../config');
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// app.use(cookieParser());
const ServiceProvider = require('../Model/serviceProvider');

const saveServiceProvider = async (req, res) => { 
    try {
        console.log(req.body.providerID);
        console.log(req.body.providerName);
        console.log(req.body.service);
        const serviceProvider = new ServiceProvider({
            providerID: req.body.providerID,
            providerName: req.body.providerName,
            service: req.body.service,
        })

        await serviceProvider.save();
        res.send("Service Provider Data Saved");
    } catch (error) {
        return error;
    }
}


module.exports = { 
    saveServiceProvider,
}