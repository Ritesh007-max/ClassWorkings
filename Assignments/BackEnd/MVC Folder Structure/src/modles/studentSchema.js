// src/models/user.model.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type:     String,
      required: true,
      trim:     true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    semester: {
      type: Int16Array,
      required: true,
    },
    CGPA: {
      type: Float16Array,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Student', userSchema);

module.exports = Student;