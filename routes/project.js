'use strict';

const express = require('express');
const projectController = require('../controllers/project');

const router = express.Router();

router.get('/home', projectController.home);
router.post('/test', projectController.test);
router.post('/saveProject', projectController.saveProject);

module.exports = router;
