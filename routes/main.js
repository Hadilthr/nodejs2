const express = require("express");
const router = express.Router() ;
const { sendFile } = require('../controller/main');
router.get("/sendFile",sendFile);


module.exports = router;