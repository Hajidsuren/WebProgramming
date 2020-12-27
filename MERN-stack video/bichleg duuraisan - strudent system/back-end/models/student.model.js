const mongoose = require("mongoose");
const Course = require("./lesson.model");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentID: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 8,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },

  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
