require('../config');
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// app.use(cookieParser());
const Service = require('../Model/service');

const saveService = async (req, res) => {
    try {
        if (req.body.serviceName && req.body.serviceID && req.body.Category) {
            const serviceID = req.body.serviceID;
            const service = await Service.aggregate([
                { $match: { serviceID: serviceID } }
            ]);
            if (service.length === 0) {
                const service = new Service({
                    serviceID: req.body.serviceID,
                    serviceName: req.body.serviceName,
                    Category: req.body.Category
                })

                await service.save();
                res.status(200).send({ result: "Service Data Saved" });
            }
            else {
                res.status(401).send({ result: "Service Already Exist" });
            }
        } else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        return error;
    }
}

const getService = async (req, res) => {
    console.log("Inside Get User Api")
    try {
        const service = await Service.find();
        if (service.length > 0) {
            res.status(200).json({
                service: service
            });
        } else (
            res.status(404).send({ msg: "No Service Found" })
        )
    } catch (error) {
        return error;
    }
}

const getOneService = async (req, res) => {
    console.log("Inside Get One Api")
    try {
        if (req.query.serviceID) {
            const serviceID = req.query.serviceID;

            const service = await Service.aggregate([
                { $match: { serviceID: serviceID } }
            ]);
            if (service.length !== 0) {
                res.status(200).json({
                    service: service
                });
            }
            else {
                res.status(401).send({ result: "service Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "service Not Found" })
    }
}

const getCategoryServices = async(req,res) => {
    console.log("Inside Get One Api")
    try {
        if (req.query.Category) {
            const Category = req.query.Category;

            const service = await Service.aggregate([
                { $match: { Category: Category } }
            ]);
            if (service.length !== 0) {
                res.status(200).json({
                    service: service
                });
            }
            else {
                res.status(401).send({ result: "service Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "service Not Found" })
    }   
} 

const updateServiceDetails = async (req, res) => {
    try {
        console.log("Inside Put Function")
        if (req.body.serviceID && req.body.serviceName && req.body.Category) {
            const serviceID = req.body.serviceID;
            const service = await Service.aggregate([
                { $match: { serviceID: serviceID } }
            ]);
            if (service.length !== 0) {
                const update = {
                    $set:
                    {
                        serviceID: req.body.serviceID,
                        serviceName: req.body.serviceName,
                        Category: req.body.Category
                    }
                };
                const filter = { serviceID: serviceID };
                console.log(filter)
                await Service.updateOne(filter, update);
                res.status(200).send({ result: "service Data Updated" });
            }
            else {
                res.status(401).send({ result: "service Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }

    } catch (error) {
        return error;
    }
}

const deleteService = async (req, res) => {
    try {
        if (req.query.serviceID) {
            const serviceID = req.query.serviceID;
            const service = await Service.deleteOne({ serviceID });
            if (service.deletedCount === 1) {
                res.status(200).json({
                    service: service
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
    saveService,
    getService,
    getOneService,
    getCategoryServices,
    updateServiceDetails,
    deleteService
}