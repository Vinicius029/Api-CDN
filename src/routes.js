const express = require('express');
const router = express.Router();
const { getStyles, getJs } = require('./handlers/index.js')


router.get('/style', getStyles);
router.get('/js', getJs);

module.exports = router;