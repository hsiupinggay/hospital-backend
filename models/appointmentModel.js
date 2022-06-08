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
    time: {
      type: Number,
      min: [800, 'Consultation starts at 8am'],
      max: [1600, 'Consultation ends at 4pm'],
    },
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
