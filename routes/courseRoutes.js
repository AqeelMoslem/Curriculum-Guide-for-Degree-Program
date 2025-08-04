const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware'); // لو عندك حماية

router.get('/', authMiddleware, courseController.index, (req, res) => {
  res.json(res.locals.data.courses);
});

router.post('/', authMiddleware, courseController.create, (req, res) => {
  res.status(201).json(res.locals.data.course);
});

router.get('/:id', authMiddleware, courseController.show, (req, res) => {
  res.json(res.locals.data.course);
});

router.put('/:id', authMiddleware, courseController.update, (req, res) => {
  res.json(res.locals.data.course);
});

router.delete('/:id', authMiddleware, courseController.delete, (req, res) => {
  res.json({ message: res.locals.data.message });
});

module.exports = router;
