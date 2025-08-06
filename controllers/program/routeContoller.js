
const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authDataController = require('../auth/dataController.js')
const User = require('../../models/user');
const Program = require('../../models/Program');
// add routes

// Index
router.get('/', authDataController.auth
    /* check if the token exists in the header or the query, set req.user and res.locals.data.token */ , 
    dataController.index
    /*grab and save the logged in user's fruits */, 
    viewController.index
    /* display the logged in users fruits and also the link to the new page with the token*/
);
// Unselect program (remove user's selection)
router.post('/unselect', authDataController.auth, async (req, res) => {
  // Remove program and subject from user
  if (req.user) {
    req.user.program = undefined;
    // If you store selectedSubject, clear it as well
    if ('selectedSubject' in req.user) req.user.selectedSubject = undefined;
    await req.user.save();
  }
  const token = req.query.token || req.body.token || req.headers.authorization?.replace('Bearer ', '');
  res.redirect(`/courses?token=${token}`);
});
// Handle program selection

router.get('/select/:programCode', authDataController.auth, dataController.getCoursesByProgram, viewController.select);

router.post('/select', authDataController.auth, dataController.select, viewController.redirectShow);
// New
router.get('/new', authDataController.auth, viewController.newView );
router.get('/select', authDataController.auth, viewController.newSelect)
router.get('/edit', authDataController.auth, dataController.update, viewController.edit);
// POST route to handle subject selection for SE program
router.post('/select/se', authDataController.auth, dataController.selectSE, viewController.redirectShow);
// POST route to handle subject selection for CE program
router.post('/select/ce', authDataController.auth, dataController.selectSE, viewController.redirectShow);
// POST route to handle subject selection for IS program
router.post('/select/is', authDataController.auth, dataController.selectSE, viewController.redirectShow);
// // Delete
router.delete('/:id',authDataController.auth, dataController.destroy, viewController.redirectHome);
 
// // Update
// router.put('/:id',authDataController.auth, dataController.update, viewController.redirectShow);
// // Create
// router.post('/', authDataController.auth, dataController.create, viewController.redirectHome);
// // Show
// router.get('/:id', authDataController.auth, dataController.show, viewController.show);
// export router

module.exports = router;