const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	config = require('./config/main');
const router = require('./router');

//connect to database
mongoose.connect(config.database);


// Start up bodyparser
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  

// Start the server
const server = app.listen(config.port);
console.log('Server running on port ' + config.port);

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// Enable CORS
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

router(app);


