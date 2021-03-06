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
 *             documents for doctor collection
 *
 * ========================================================
 * ========================================================
 */
const { Schema } = mongoose;

const doctorSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Doctor', doctorSchema);
