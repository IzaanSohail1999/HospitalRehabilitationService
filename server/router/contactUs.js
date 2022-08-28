const express = require('express');
const router = express.Router();
const contactUs = require('../controllers/contactUs');

router.route('/ContactUs').post(ContactUs);
function ContactUs(req, res) {
    contactUs.ContactUs(req, res);
}

module.exports = router;