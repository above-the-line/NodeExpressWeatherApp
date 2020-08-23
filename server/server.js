// Env vars
require("dotenv").config({ silent: true });

// Imports for Express Server
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

// Context
global.__basedir = __dirname + "/";
const SERVER_PORT = process.env.SERVER_PORT;
const database = process.env.DB_TEST;

// Define Express App
const router = require("./router.js");
const app = express();
app.use(require("express-status-monitor")());

// Init swagger
require("./config/swagger_config").swagger_init(app, express);
console.log("Swagger Init");

// Database Connection
console.log("Server is connecting to database")
console.log(database)
mongoose.connect(database, function(err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});



// Start Server
app.use(express.static('public'));

app.listen(SERVER_PORT, () => {
    console.log(
        "Your API Server is running on port " +
        SERVER_PORT +
          ". Environment " +
          process.env.ENVIRONMENT
      );
});




// Setting up basic middleware for all Express requests
// Log requests to API using morgan
app.use(logger("dev"));

// Parse urlencoded bodies to JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

router(app);
module.exports = app;