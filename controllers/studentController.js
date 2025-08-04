const Student = require('..Student');

const studentController = {};

studentController.index = async (req, res, next) => {
  try {
    res.locals.data = {};
    res.locals.data.students = await Student.find().populate('enrolledCourses program');
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

studentController.create = async (req, res, next) => {
  try {
    res.locals.data = {};
    res.locals.data.student = await Student.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

studentController.show = async (req, res, next) => {
  try {
    res.locals.data = {};
    const student = await Student.findById(req.params.id).populate('enrolledCourses program');
    if (!student) return res.status(404).send({ message: 'Student not found' });
    res.locals.data.student = student;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

studentController.update = async (req, res, next) => {
  try {
    res.locals.data = {};
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).send({ message: 'Student not found' });
    res.locals.data.student = student;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

studentController.delete = async (req, res, next) => {
  try {
    res.locals.data = {};
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send({ message: 'Student not found' });
    res.locals.data.message = 'Student deleted';
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = studentController;
