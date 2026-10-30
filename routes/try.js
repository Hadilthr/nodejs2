const express = require('express');
const router = express.Router();
const { tryResponse } = require('../controller/try');
router.get("/", tryResponse);



module.exports = router;