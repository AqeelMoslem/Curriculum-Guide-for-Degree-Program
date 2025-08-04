const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  description: String,
  prerequisites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Course', courseSchema);
