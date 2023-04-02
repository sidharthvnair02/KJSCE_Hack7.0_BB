const {book} = require('../controller/booking_cont')
const express = require("express");
const router = express.Router();


router.post('/new',book)

module.exports = router;