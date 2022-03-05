let express = require('express');
let routerUsers = express.Router();
let userController = require('../controllers/userController');

// Ruta a vista Register
routerUsers.get("/", userController.register);


module.exports = routerUsers;