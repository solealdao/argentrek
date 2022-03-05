let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');

// Ruta al Home
router.get("/", mainController.home);


module.exports = router;