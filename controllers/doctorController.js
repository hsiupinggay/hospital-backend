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
class DoctorController extends BaseController {
  constructor(model) {
    super(model);
  }

  async addDoctor(req, res) {
    const { doctorName } = req.body;

    try {
      const doctor = await this.model.create({
        name: doctorName,
      });

      console.log('doctor created', doctor);

      return this.successHandler(res, 200, { message: 'success' });
    } catch (err) {
      return this.errorHandler(res, 400, { err });
    }
  }
}

module.exports = DoctorController;
