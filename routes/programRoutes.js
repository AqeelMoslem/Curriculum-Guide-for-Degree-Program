const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, programController.index, (req, res) => {
  res.json(res.locals.data.programs);
});

router.post('/', authMiddleware, programController.create, (req, res) => {
  res.status(201).json(res.locals.data.program);
});

router.get('/:id', authMiddleware, programController.show, (req, res) => {
  res.json(res.locals.data.program);
});

router.put('/:id', authMiddleware, programController.update, (req, res) => {
  res.json(res.locals.data.program);
});

router.delete('/:id', authMiddleware, programController.delete, (req, res) => {
  res.json({ message: res.locals.data.message });
});

module.exports = router;
