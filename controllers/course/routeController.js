const express = require('express');
const router = express.Router();
const dataController = require('./dataController');
const viewController = require('./viewController');
// const apiController = require('./apiController');
const authController = require('../auth/dataController')

// API Routes
// router.get('/api', dataController.index, apiController.index);
// router.get('/api/:id', dataController.show, apiController.show);
// router.post('/api', dataController.create, apiController.create);
// router.put('/api/:id', dataController.update, apiController.update);
// router.delete('/api/:id', dataController.delete, apiController.delete);

// View Routes
router.get('/', authController.auth, dataController.index, viewController.index);
router.get('/:id', dataController.show, viewController.show);

module.exports = router;