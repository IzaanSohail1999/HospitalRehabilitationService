// const Auth = require('../components/auth');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.route("/saveSuperAdmin").post(saveSuperAdmin);
function saveSuperAdmin(req, res){
    userController.saveSuperAdmin(req, res);   
    };

router.route("/saveUser").post(saveUser);
function saveUser(req, res){
        userController.saveUser(req, res);   
        };

router.route("/deleteUser").delete(deleteUser);
function deleteUser(req, res){
    userController.deleteUser(req, res);   
    };

router.route("/updateUserDetails").put(updateUserDetails);
function updateUserDetails(req, res){
    userController.updateUserDetails(req, res);   
    };

router.route("/updatePassword").put(updatePassword);
function updatePassword(req, res){
    userController.updatePassword(req, res);   
    };

router.route("/getParticularUser").get(getParticularUser);
function getParticularUser(req, res){
    userController.getParticularUser(req, res);   
    };

router.route("/getOneUser").get(getOneUser);
function getOneUser(req, res){
    userController.getOneUser(req, res);   
    };

router.route("/getUser").get(getUser);
function getUser(req, res){
    userController.getUser(req, res);   
    };

module.exports = router;