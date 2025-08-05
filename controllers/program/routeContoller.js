const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authDataController = require('../auth/dataController.js')
// add routes
// Index
router.get('/', authDataController.auth
    /* check if the token exists in the header or the query, set req.user and res.locals.data.token */ , 
    dataController.index
    /*grab and save the logged in user's fruits */, 
    viewController.index
    /* display the logged in users fruits and also the link to the new page with the token*/
);
// Handle program selection
router.post('/select', authDataController.auth, async (req, res, next) => {
  // Save selected program to user
  const User = require('../../models/user');
  const Program = require('../../models/Program');
  const user = req.user;
  const programId = req.body.programId;
  if (programId) {
    user.program = programId;
    await user.save();
    // Optionally, fetch program details to show on home
    const program = await Program.findById(programId);
    res.locals.data.program = program;
  }
  // Redirect to home with token
  res.redirect(`/courses?token=${res.locals.data.token}`);
});
// New
router.get('/new', authDataController.auth, viewController.newView );
// Delete
router.delete('/:id',authDataController.auth, dataController.destroy, viewController.redirectHome);
 router.get('/select', authDataController.auth, viewController.newSelect)
// Update
router.put('/:id',authDataController.auth, dataController.update, viewController.redirectShow);
// Create
router.post('/', authDataController.auth, dataController.create, viewController.redirectHome);
// Edit
router.get('/:id/edit', authDataController.auth, dataController.show, viewController.edit);
// Show
router.get('/:id', authDataController.auth, dataController.show, viewController.show);
// export router
module.exports = router;