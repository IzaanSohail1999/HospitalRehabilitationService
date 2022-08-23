// const Auth = require('../components/auth');
const express = require('express');
const router = express.Router();
const serviceProviderController = require('../controllers/serviceProvider');

router.route("/saveServiceProvider").post(saveServiceProvider);
function saveServiceProvider(req, res){
    serviceProviderController.saveServiceProvider(req, res);   
};

router.route("/addService").put(addService);
function addService(req, res){
    serviceProviderController.addService(req, res);   
};

router.route("/removeService").put(removeService);
function removeService(req, res){
    serviceProviderController.removeService(req, res);   
};

router.route("/getServiceProvider").get(getServiceProvider);
function getServiceProvider(req, res){
    serviceProviderController.getServiceProvider(req, res);   
};

router.route("/getParticularServiceProvider").get(getParticularServiceProvider);
function getParticularServiceProvider(req, res){
    serviceProviderController.getParticularServiceProvider(req, res);   
};

router.route("/getOneServiceProvider").get(getOneServiceProvider);
function getOneServiceProvider(req, res){
    serviceProviderController.getOneServiceProvider(req, res);   
};

router.route("/updateServiceProviderDetails").put(updateServiceProviderDetails);
function updateServiceProviderDetails(req, res){
    serviceProviderController.updateServiceProviderDetails(req, res);   
};

router.route("/deleteServiceProvider").delete(deleteServiceProvider);
function deleteServiceProvider(req, res){
    serviceProviderController.deleteServiceProvider(req, res);   
};
module.exports = router;