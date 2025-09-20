const express = require('express');
const router = express.Router();
const ApiControllers = require('../controllers/ApiControllers.js');

router
    .get('/cron', ApiControllers.ejecutarCron)

module.exports = router;