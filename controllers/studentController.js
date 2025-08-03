// controllers/studentController.js

// Get all students
exports.getAllStudents = (req, res) => {
  res.send("List of all students");
};

// Create a new student
exports.createStudent = (req, res) => {
  res.send("Student created");
};

// Show a specific student
exports.getStudentById = (req, res) => {
  const { id } = req.params;
  res.send(`Student details for ID ${id}`);
};

// Update a student
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  res.send(`Student ${id} updated`);
};

// Delete a student
exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  res.send(`Student ${id} deleted`);
};
