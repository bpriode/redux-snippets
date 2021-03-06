// Importing Node modules and initializing Express
const express = require('express');
const app = express();
const logger = require('morgan');
const config = require('./config/main');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');

// Database Connection
var promise =
mongoose.connect(config.database, {
  useMongoClient: true
})

if(require.amin === module) {
  app.listen(config.port, () => {
    console.log('App is running on ', config.port);
  })
}
// Start the server
// const server = app.listen(config.port);
// console.log('Your server is running on port ' + config.port + '.');

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

router(app);

module.exports = app;
