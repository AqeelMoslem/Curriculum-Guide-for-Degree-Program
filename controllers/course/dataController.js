const Course = require('../../models/Course');

const dataController = {};

dataController.index = async (req, res, next) => {
  try {
    res.locals.data.courses = await Course.find({});
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.show = async (req, res, next) => {
  try {
    res.locals.data.course = await Course.findById(req.params.id);
    next();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

dataController.create = async (req, res, next) => {
  try {
    res.locals.data.course = await Course.create(req.body);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.update = async (req, res, next) => {
  try {
    res.locals.data.course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.delete = async (req, res, next) => {
  try {
    res.locals.data.course = await Course.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = dataController;