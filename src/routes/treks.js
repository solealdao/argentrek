let express = require('express');
let routerTreks = express.Router();
let trekController = require('../controllers/trekController');

// Ruta a vista Create
routerTreks.get("/", trekController.create);


module.exports = routerTreks;