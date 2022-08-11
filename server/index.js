require('./config');
require('dotenv').config();
const express = require("express");
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*")
    next();
  });

function setupRoutes() {
    const routes = require("./routes");
    routes.setup(app);
}
setupRoutes();

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;