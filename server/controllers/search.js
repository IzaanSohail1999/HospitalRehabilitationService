require('../config');
require('dotenv').config();
const Service = require('../Model/service');
const ServiceProvider = require('../Model/serviceProvider');

const searchService = async (req, res) => {
    try {
        if (req.query.serviceName && req.query.Category && req.query.Type) {
            const serviceName = req.query.serviceName;
            const Category = req.query.Category;
            const Type = req. query.Type;

            const service = await Service.aggregate([
                { $match: { serviceName: serviceName, Category: Category } }
            ]);
            if (service.length !== 0) {
                // console.log(service[0].serviceID);
                const serviceprovider = await ServiceProvider.aggregate([
                    { $match: { serviceID: service[0].serviceID, type: Type } }
                ]);
                if (serviceprovider.length !== 0) {
                    res.status(200).json({
                        serviceprovider: serviceprovider
                    });
                }
                else {
                    res.status(401).send({ result: "No Service Provider Offers this Service" });
                }
            }
            else {
                res.status(404).send({ result: "service Doesnt Exist" });
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

module.exports = {
    searchService
}