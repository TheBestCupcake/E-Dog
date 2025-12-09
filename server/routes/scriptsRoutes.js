const express = require('express');
const router = express.Router();

//Assigns function to a url endpoint.
const {getAllScripts, getScriptById} = require('../controllers/scriptsController');

router.get('/', getAllScripts);
router.get('/:id', getScriptById);

module.exports = router;