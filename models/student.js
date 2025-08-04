const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  gpa: Number
});

module.exports = mongoose.model('Student', studentSchema);
