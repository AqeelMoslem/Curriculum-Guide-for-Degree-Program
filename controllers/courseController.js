const Course = require('.../models/Course');

const courseController = {};

courseController.index = async (req, res, next) => {
  try {
    res.locals.data = {};
    res.locals.data.courses = await Course.find().populate('prerequisites');
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

courseController.create = async (req, res, next) => {
  try {
    if (req.body.isActive === 'on') req.body.isActive = true;
    else if (req.body.isActive !== true) req.body.isActive = false;

    res.locals.data = {};
    res.locals.data.course = await Course.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

courseController.show = async (req, res, next) => {
  try {
    res.locals.data = {};
    const course = await Course.findById(req.params.id).populate('prerequisites');
    if (!course) return res.status(404).send({ message: 'Course not found' });
    res.locals.data.course = course;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

courseController.update = async (req, res, next) => {
  try {
    if (req.body.isActive === 'on') req.body.isActive = true;
    else if (req.body.isActive !== true) req.body.isActive = false;

    res.locals.data = {};
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).send({ message: 'Course not found' });
    res.locals.data.course = course;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

courseController.delete = async (req, res, next) => {
  try {
    res.locals.data = {};
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).send({ message: 'Course not found' });
    res.locals.data.message = 'Course deleted';
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = courseController;
