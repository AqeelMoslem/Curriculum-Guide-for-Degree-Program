const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  credits: { type: Number, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Program', ProgramSchema);

