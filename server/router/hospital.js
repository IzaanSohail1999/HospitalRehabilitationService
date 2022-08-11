const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospital');

router.route('/saveHospital').post(saveHospital);
function saveHospital(req, res) {
    hospitalController.saveHospital(req, res);
}

router.route('/getHospital').get(getHospital);
function getHospital(req, res) {
    hospitalController.getHospital(req, res);
}

router.route('/getParticularHospital').get(getParticularHospital);
function getParticularHospital(req, res) {
    hospitalController.getParticularHospital(req, res);
}

router.route('/getOneHospital').get(getOneHospital);
function getOneHospital(req, res) {
    hospitalController.getOneHospital(req, res);
}

router.route('/deleteHospital').delete(deleteHospital);
function deleteHospital(req, res) {
    hospitalController.deleteHospital(req, res);
}

router.route('/updateHospitalDetails').put(updateHospitalDetails);
function updateHospitalDetails(req, res) {
    hospitalController.updateHospitalDetails(req, res);
}

module.exports = router;