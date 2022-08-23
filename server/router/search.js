// const Auth = require('../components/auth');
const express = require('express');
const router = express.Router();
const search = require('../controllers/search');

router.route("/searchService").get(searchService);
function searchService(req, res){
    search.searchService(req, res);   
};

module.exports = router;