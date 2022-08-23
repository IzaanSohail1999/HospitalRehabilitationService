require('../config');
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// app.use(cookieParser());
const ServiceProvider = require('../Model/serviceProvider');

const saveServiceProvider = async (req, res) => {
    try {
        if (req.body.name && req.body.postcode && req.body.phone && req.body.website && req.body.ccgboundary && req.body.type && req.body.serviceID) {
            const name = req.body.name;
            const serviceProvider = await ServiceProvider.aggregate([
                { $match: { name: name } }
            ]);
            if (serviceProvider.length === 0) {
                const serviceProvider = new ServiceProvider({
                    name: req.body.name,
                    postcode: req.body.postcode,
                    phone: req.body.phone,
                    website: req.body.website,
                    ccgboundary: req.body.ccgboundary,
                    type: req.body.type,
                    serviceID: req.body.serviceID
                })

                await serviceProvider.save();
                res.status(200).send({ result: "Service Provider Data Saved" });
            }
            else {
                res.status(401).send({ result: "Provider Already Exist" });
            }
        } else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        return error;
    }
}

const addService = async (req, res) => {
    try {
        let found = false;
        console.log("Inside Put Function")
        if (req.body.name && req.body.serviceID) {
            const name = req.body.name;
            const serviceprovider = await ServiceProvider.aggregate([
                { $match: { name: name } }
            ]);
            if (serviceprovider.length !== 0) {
                console.log(serviceprovider[0].serviceID);
                const serviceID = serviceprovider[0].serviceID;
                serviceID.forEach((ID) => {
                    if(ID === req.body.serviceID){
                        found = true;
                        return res.status(401).send({ result: "Service Already Exist" });
                        console.log("found")
                    }
                });
                if(found === false)
                {

                    serviceID.push(req.body.serviceID)
                    console.log(serviceID);
                    const update = {
                        $set:
                        {
                            serviceID: serviceID
                        }
                    };
                    const filter = { name: name };
                    console.log(filter)
                    await ServiceProvider.updateOne(filter, update);
                    res.status(200).send({ result: "service Added" });
                }
                }
                else {
                res.status(404).send({ result: "service provider Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }

    } catch (error) {
        return error;
    }
}

const removeService = async (req, res) => {
    try {
        let found = false;
        console.log("Inside Put Function")
        if (req.body.name && req.body.serviceID) {
            const name = req.body.name;
            const serviceprovider = await ServiceProvider.aggregate([
                { $match: { name: name } }
            ]);
            if (serviceprovider.length !== 0) {
                console.log(serviceprovider[0].serviceID);
                const serviceID = serviceprovider[0].serviceID;
                let count = 0;
                serviceID.forEach((ID) => {
                    if(ID === req.body.serviceID){
                        found = true;
                        serviceID.splice(count, 1);
                    }
                    count += 1;
                });
                if(found === false){
                    res.status(401).send({ result: "service Doesnt Exist" });
                }
                console.log(serviceID);
                const update = {
                    $set:
                    {
                        serviceID: serviceID
                    }
                };
                const filter = { name: name };
                console.log(filter)
                await ServiceProvider.updateOne(filter, update);
                res.status(200).send({ result: "service Removed" });
            }
            else {
                res.status(404).send({ result: "service provider Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }

    } catch (error) {
        return error;
    }
}

const getServiceProvider = async (req, res) => {
    console.log("Inside Get User Api")
    try {
        const serviceProvider = await ServiceProvider.find();
        if (serviceProvider.length > 0) {
            res.status(200).json({
                serviceProvider: serviceProvider
            });
        } else (
            res.status(404).send({ msg: "No User Found" })
        )
    } catch (error) {
        return error;
    }
}

const getParticularServiceProvider = async (req, res) => {
    console.log("Inside Get Particular Api")
    try {
        if (req.query.name && req.query.postcode && req.query.phone && req.query.website && req.query.ccgboundary && req.query.type) {
            const name = req.query.name;
            const postcode = req.query.postcode;
            const phone = req.query.phone;
            const website = req.query.website;
            const ccgboundary = req.query.ccgboundary;
            const type = req.query.type;
            const serviceprovider = await ServiceProvider.aggregate([
                { $match: 
                    { 
                        name: name, 
                       postcode: postcode, 
                       phone: phone, 
                       website: website, 
                       ccgboundary: ccgboundary,
                       type: type
                     } 
                }
            ]);
            if (serviceprovider.length !== 0) {
                res.status(200).json({
                    serviceprovider: serviceprovider
                });
            }
            else {
                res.status(401).send({ result: "Service Provider Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "ServiceProvider Not Found" })
    }
}

const getOneServiceProvider = async (req, res) => {
    console.log("Inside Get One Api")
    try {
        if (req.query.name) {
            const name = req.query.name;

            const serviceprovider = await ServiceProvider.aggregate([
                { $match: { name: name } }
            ]);
            if (serviceprovider.length !== 0) {
                res.status(200).json({
                    serviceprovider: serviceprovider
                });
            }
            else {
                res.status(401).send({ result: "serviceprovider Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "serviceprovider Not Found" })
    }
}

const updateServiceProviderDetails = async (req, res) => {
    try {
        console.log("Inside Put Function")
        if (req.body.name && req.body.postcode && req.body.phone && req.body.website && req.body.ccgboundary && req.body.type && req.body.serviceID) {
            const name = req.body.name;
            const serviceprovider = await ServiceProvider.aggregate([
                { $match: { name: name } }
            ]);
            if (serviceprovider.length !== 0) {
                const update = {
                    $set:
                    {
                        name: req.body.name,
                        postcode: req.body.postcode,
                        phone: req.body.phone,
                        website: req.body.website,
                        ccgboundary: req.body.ccgboundary,
                        type: req.body.type,
                        serviceID: req.body.serviceID
                    }
                };
                const filter = { name: name };
                console.log(filter)
                await ServiceProvider.updateOne(filter, update);
                res.status(200).send({ result: "serviceprovider Data Updated" });
            }
            else {
                res.status(401).send({ result: "serviceprovider Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }

    } catch (error) {
        return error;
    }
}

const deleteServiceProvider = async (req, res) => {
    try {
        if (req.query.name) {

            const name = req.query.name;
            const serviceprovider = await ServiceProvider.deleteOne({ name });
            if (serviceprovider.deletedCount === 1) {
                res.status(200).json({
                    serviceprovider: serviceprovider
                });
            }
            else {
                res.status(404).send({ result: 'Not Found' });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        return error;
    }
}

module.exports = {
    saveServiceProvider,
    getServiceProvider,
    getParticularServiceProvider,
    getOneServiceProvider,
    updateServiceProviderDetails,
    deleteServiceProvider,
    addService,
    removeService
}