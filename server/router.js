const AuthenticationController = require('./controllers/authentication'); 
const express = require('express'),
      passport = require('passport'),
      passportService = require('./config/passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false });  

// Constants for role types
const REQUIRE_ADMIN = "Admin",  
      REQUIRE_OWNER = "Owner",
      REQUIRE_CLIENT = "Client",
      REQUIRE_MEMBER = "Member";

module.exports = function(app) {  
  // Initializing route groups
  const apiRoutes = express.Router(),
        authRoutes = express.Router();

//   //=========================
//   // Auth Routes
//   //=========================

  // Set auth routes as subgroup/middleware to apiRoutes
  // apiRoutes.use('/auth', authRoutes);

//   // Registration route
//   authRoutes.post('/register', AuthenticationController.register);
  app.post('/api/register', AuthenticationController.register);

  // Login route
  app.post('/api/login', requireLogin, AuthenticationController.login);

// // Set url for API group routes
  // app.use('/api', apiRoutes);
};