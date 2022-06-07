/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
const BaseController = require('./baseController');

require('dotenv').config();

/*
 * ========================================================
 * ========================================================
 *
 *                    Appointment Controller
 *
 * ========================================================
 * ========================================================
 */
class PatientController extends BaseController {
  constructor(model) {
    super(model);
  }

  async addPatient(req, res) {
    const {
      patientName,
      age,
      gender,
    } = req.body;

    try {
      const patient = await this.model.create({
        name: patientName,
        age,
        gender,
      });

      console.log('patient created', patient);

      return this.successHandler(res, 200, { message: 'success' });
    } catch (err) {
      return this.errorHandler(res, 400, { err });
    }
  }
}

module.exports = PatientController;
