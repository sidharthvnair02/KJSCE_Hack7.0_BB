const {addPlace,viewAllPlace} = require('../controller/places_cont')
const express = require("express");
const router = express.Router();


router.post('/add',addPlace)


router.get('/all',viewAllPlace)

module.exports = router;