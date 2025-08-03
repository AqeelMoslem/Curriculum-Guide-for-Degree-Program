// controllers/courseController.js

// Get all courses
exports.getAllCourses = (req, res) => {
  res.send("List of all courses");
};

// Create a new course
exports.createCourse = (req, res) => {
  res.send("Course created");
};

// Show a specific course
exports.getCourseById = (req, res) => {
  const { id } = req.params;
  res.send(`Course details for ID ${id}`);
};

// Update a course
exports.updateCourse = (req, res) => {
  const { id } = req.params;
  res.send(`Course ${id} updated`);
};

// Delete a course
exports.deleteCourse = (req, res) => {
  const { id } = req.params;
  res.send(`Course ${id} deleted`);
};
