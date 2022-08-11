const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.route('/login').post(login);
function login(req, res) {
    loginController.login(req, res);
}

router.route('/ForgetPassword').post(ForgetPassword);
function ForgetPassword(req, res) {
    loginController.ForgetPassword(req, res);
}

router.route('/verifyOTP').post(verifyOTP);
function verifyOTP(req, res) {
    loginController.verifyOTP(req, res);
}

module.exports = router;