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
 *             documents for patient collection
 *
 * ========================================================
 * ========================================================
 */
const { Schema } = mongoose;

const patientSchema = new Schema(
  {
    name: String,
    age: Number,
    gender: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Patient', patientSchema);
