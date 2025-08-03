const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  description: { type: String },
  prereqs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Course', CourseSchema);

