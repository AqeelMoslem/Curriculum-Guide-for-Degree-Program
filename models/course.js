const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String,  },
  hours: { type: Number, },
  description: String,
  prerequisites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' }
});

module.exports = mongoose.model('Course', courseSchema);
