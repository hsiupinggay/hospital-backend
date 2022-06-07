/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
const mongoose = require('mongoose');

/*
 * ========================================================
 * ========================================================
 *
 *             Schema describing structure of
 *             documents for appointment collection
 *
 * ========================================================
 * ========================================================
 */
const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    date: Date,
    time: Number,
    doctor: {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
    },
    patient: {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      age: Number,
      gender: String,

    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Appointment', appointmentSchema);
