const express = require('express');
const router = express.Router();
const dataController = require('./dataController');
const viewController = require('./viewController');
const authController = require('../auth/dataController');

// ✅ Add this line to fix the error
router.get('/', authController.auth, dataController.index, viewController.index);

router.get('/select/:programCode', authController.auth, dataController.getCoursesByProgram, viewController.select);
router.get('/new', authController.auth, viewController.new);
router.get('/course/:id', authController.auth, dataController.show, viewController.show);
router.post('/', authController.auth, dataController.create, viewController.redirectHome);

module.exports = router;