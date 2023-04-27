const express = require("express");
const router = express.Router();
const auth = require('./auth')
const pizza = require('./pizza')
router.use('/Auth',auth)
router.use('/Pizza',pizza)
module.exports = router;
