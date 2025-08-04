const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authController = {};

authController.signUp = async (req, res, next) => {
  try {
    await User.create(req.body);
    res.redirect('/signin');
  } catch (error) {
    res.render('auth/SignUp', { error: error.message });
  }
};

authController.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.render('auth/SignIn', { error: 'User not found' });
    if (user.password !== password) return res.render('auth/SignIn', { error: 'Incorrect password' });

    // بدلاً من JWT هنا نرسل مباشرة صفحة داشبورد مع userId
    res.render('dashboard', { userId: user._id });
  } catch (error) {
    res.render('auth/SignIn', { error: error.message });
  }
};

authController.logout = (req, res) => {
  res.redirect('/signin');
};

module.exports = authController;
