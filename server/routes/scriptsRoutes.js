const express = require('express');
const router = express.Router();

//Assigns function to a url endpoint.
const {getAllScripts} = require('../controllers/scriptsController');

router.get('/', getAllScripts);

module.exports = router;