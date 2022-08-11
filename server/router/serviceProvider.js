// const Auth = require('../components/auth');
const express = require('express');
const router = express.Router();
const serviceProviderController = require('../controllers/serviceProvider');

router.route("/saveServiceProvider").post(saveServiceProvider);
function saveServiceProvider(req, res){
    serviceProviderController.saveServiceProvider(req, res);   
    };


module.exports = router;