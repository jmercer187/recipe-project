const express = require('express');

const router = express.Router();

const browseController = require('../controllers/browse');

router.get('/', browseController.getBrowse);

module.exports = router;