const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/signup', (req, res) => res.render('auth/SignUp'));
router.post('/signup', authController.signUp);
router.get('/signin', (req, res) => res.render('auth/SignIn'));
router.post('/signin', authController.signIn);
router.get('/logout', authController.logout);

module.exports = router;
