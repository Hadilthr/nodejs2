const express = require('express');

const { getResponse,hadilResponse,messageResponse } = require('../controller/response');

const router = express.Router();

router.get('/', getResponse);
router.get("/hadil-response",hadilResponse);

router.get("/message", messageResponse);


module.exports = router;