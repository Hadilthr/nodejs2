const express = require("express");
const router = express.Router()
const { sendFile } = require('../controller/maincontroller');
router.get("/sendFile",sendFile);


module.exports = router;