let express = require('express');
let routerTreks = express.Router();
let trekController = require('../controllers/trekController');

// Ruta a vista Create
routerTreks.get("/", trekController.create);

// Ruta a vista Detail
routerTreks.get("/detail", trekController.detail);


module.exports = routerTreks;