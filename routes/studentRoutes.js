const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, studentController.index, (req, res) => {
  res.json(res.locals.data.students);
});

router.post('/', authMiddleware, studentController.create, (req, res) => {
  res.status(201).json(res.locals.data.student);
});

router.get('/:id', authMiddleware, studentController.show, (req, res) => {
  res.json(res.locals.data.student);
});

router.put('/:id', authMiddleware, studentController.update, (req, res) => {
  res.json(res.locals.data.student);
});

router.delete('/:id', authMiddleware, studentController.delete, (req, res) => {
  res.json({ message: res.locals.data.message });
});

module.exports = router;
