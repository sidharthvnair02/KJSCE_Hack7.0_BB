const { createorder,verifyorder} = require('../controller/payment_cont')
const express = require("express");
const router = express.Router();


router.post('/createorder',createorder)
router.post('/verifyorder',verifyorder)

module.exports = router;