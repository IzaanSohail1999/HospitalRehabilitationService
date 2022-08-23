// const Auth = require('../components/auth');
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service');

router.route("/saveService").post(saveService);
function saveService(req, res){
    serviceController.saveService(req, res);   
};

router.route("/getService").get(getService);
function getService(req, res){
    serviceController.getService(req, res);   
};

router.route("/getOneService").get(getOneService);
function getOneService(req, res){
    serviceController.getOneService(req, res);   
};

router.route("/getCategoryServices").get(getCategoryServices);
function getCategoryServices(req, res){
    serviceController.getCategoryServices(req, res);   
};

router.route("/updateServiceDetails").put(updateServiceDetails);
function updateServiceDetails(req, res){
    serviceController.updateServiceDetails(req, res);   
};

router.route("/deleteService").delete(deleteService);
function deleteService(req, res){
    serviceController.deleteService(req, res);   
};

module.exports = router;