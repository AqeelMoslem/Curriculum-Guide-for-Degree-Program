const Student = require('../../models/student');

const dataController = {};

dataController.index = async (req, res, next) => {
  try {
    res.locals.data.students = await Student.find({}).populate('courses program');
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.show = async (req, res, next) => {
  try {
    res.locals.data.student = await Student.findById(req.params.id).populate('courses program');
    next();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

dataController.create = async (req, res, next) => {
  try {
    res.locals.data.student = await Student.create(req.body);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.update = async (req, res, next) => {
  try {
    res.locals.data.student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.delete = async (req, res, next) => {
  try {
    res.locals.data.student = await Student.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = dataController;
