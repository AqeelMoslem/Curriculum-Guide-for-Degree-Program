const Program = require('../../models/Program');
const Course = require('../../models/Course');

const dataController = {};
dataController.getCoursesByProgram = async (req, res, next) => {
  try {
    const programCode = req.params.programCode;
    res.locals.data.courses = await Course.find({ programCode }); // أو حسب الحقل عندك
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

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

dataController.destroy = async (req, res, next) => {
  try {
    res.locals.data.program = await Program.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


dataController.select = async (req, res, next) => {
  try {
    const programId = req.body.programId;

    if (!programId) {
      return res.status(400).send("No program selected");
    }

    const program = await Program.findOne({ code: programId }).populate('courses');

    if (!program) {
      return res.status(404).send("Program not found");
    }

    // Save to user
    req.user.program = program.name;
    await req.user.save();

    // Optional: store token from query
    const token = req.query.token || req.body.token || req.headers.authorization?.replace('Bearer ', '');

    // Redirect to /courses with token, program, and subject
    res.redirect(`/courses?token=${token}&program=${encodeURIComponent(program.name)}`);
  } catch (error) {
    console.error("Select Error:", error.message);
    res.status(500).send("Server error");
  }
};

dataController.selectSE =(req, res) => {
  const selectedSubject = req.body.selectedSubject;
  const token = req.query.token;

  // Redirect to /courses with selected data
  res.redirect(`/courses?token=${token}&program=Software%20Engineering&selectedSubject=${encodeURIComponent(selectedSubject)}`);
};

module.exports = dataController;