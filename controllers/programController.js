// controllers/programController.js

// Get all programs
exports.getAllPrograms = (req, res) => {
  res.send("List of all programs");
};

// Create a new program
exports.createProgram = (req, res) => {
  res.send("Program created");
};

// Show a specific program
exports.getProgramById = (req, res) => {
  const { id } = req.params;
  res.send(`Program details for ID ${id}`);
};

// Update a program
exports.updateProgram = (req, res) => {
  const { id } = req.params;
  res.send(`Program ${id} updated`);
};

// Delete a program
exports.deleteProgram = (req, res) => {
  const { id } = req.params;
  res.send(`Program ${id} deleted`);
};
