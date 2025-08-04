const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  requirements: String,
  credits: Number,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Program', programSchema);
