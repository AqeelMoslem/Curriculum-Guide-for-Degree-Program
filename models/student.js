const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  gpa: { type: Number, default: 0.0 },
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' }
});

module.exports = mongoose.model('Student', StudentSchema);