/* eslint-disable no-underscore-dangle */
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
class AppointmentController extends BaseController {
  constructor(model, patientModel, doctorModel) {
    super(model);
    this.patientModel = patientModel;
    this.doctorModel = doctorModel;
  }

  async addAppointment(req, res) {
    const {
      patientName,
      doctorName,
      date,
      time,
    } = req.body;

    try {
      const patient = await this.patientModel.findOne({ name: patientName });

      const doctor = await this.doctorModel.findOne({ name: doctorName });

      const newAppointment = await this.model.create({
        date,
        time,
        doctor: {
          id: doctor._id,
          name: doctor.name,
        },
        patient: {
          id: patient._id,
          name: patient.name,
          age: patient.age,
          gender: patient.gender,
        },
      });

      return this.successHandler(res, 200, { newAppointment });
    } catch (err) {
      return this.errorHandler(res, 400, { err });
    }
  }

  async getAppointment(req, res) {
    const {
      doctorName,
      date,
    } = req.query;

    console.log(req.query);

    try {
      const allAppointments = await this.model.find({
        date,
        doctorName,
      });

      return this.successHandler(res, 200, { allAppointments });
    } catch (err) {
      return this.errorHandler(res, 400, { err });
    }
  }

  async deleteAppointment(req, res) {
    const {
      patientName,
      doctorName,
      date,
      time,
    } = req.body;
  }
}

module.exports = AppointmentController;
