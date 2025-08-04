const Program = require('..Program');

const programController = {};

programController.index = async (req, res, next) => {
  try {
    res.locals.data = {};
    res.locals.data.programs = await Program.find().populate('requirements');
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

programController.create = async (req, res, next) => {
  try {
    res.locals.data = {};
    res.locals.data.program = await Program.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

programController.show = async (req, res, next) => {
  try {
    res.locals.data = {};
    const program = await Program.findById(req.params.id).populate('requirements');
    if (!program) return res.status(404).send({ message: 'Program not found' });
    res.locals.data.program = program;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

programController.update = async (req, res, next) => {
  try {
    res.locals.data = {};
    const program = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!program) return res.status(404).send({ message: 'Program not found' });
    res.locals.data.program = program;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

programController.delete = async (req, res, next) => {
  try {
    res.locals.data = {};
    const program = await Program.findByIdAndDelete(req.params.id);
    if (!program) return res.status(404).send({ message: 'Program not found' });
    res.locals.data.message = 'Program deleted';
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = programController;
