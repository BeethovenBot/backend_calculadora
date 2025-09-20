const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/ApiControllers.js');

router
    .get('/cron', ejecutarCron)

module.exports = router;