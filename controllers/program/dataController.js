const Program = require('../../models/Program');

const dataController = {};

dataController.index = async (req, res, next) => {
  try {
    res.locals.data.programs = await Program.find({}).populate('courses');
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.show = async (req, res, next) => {
  try {
    res.locals.data.program = await Program.findById(req.params.id).populate('courses');
    next();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

dataController.create = async (req, res, next) => {
  try {
    res.locals.data.program = await Program.create(req.body);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.update = async (req, res, next) => {
  try {
    res.locals.data.program = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataController.delete = async (req, res, next) => {
  try {
    res.locals.data.program = await Program.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = dataController;
