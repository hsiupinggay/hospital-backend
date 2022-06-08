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

  // validate that appointment of the same time and date and doctor/patient doesn't already exist
  // validate time
  async addAppointment(req, res) {
    const {
      patientName,
      doctorName,
      date,
      time,
    } = req.body;

    // add GMT to date so that we get the right date in our time zone
    const formattedDate = new Date(`${date} GMT`);
    const formattedTime = Number(time);

    // validate time to be within consultation hours
    if (formattedTime >= 1600 || formattedTime < 800) {
      return this.errorHandler(res, 400, { message: 'consultation is from 8am to 4pm' });
    }

    try {
      // find patient, so that we can include patient profile in appointment
      // if patient does not exist, send error
      const patient = await this.patientModel.findOne({ name: patientName });

      if (!patient) return this.errorHandler(res, 400, { error: 'this patient does not exist, please create patient profile' });

      // find doctor, so that we can include doctor profile in appointment
      // if doctor does not exist, send error
      const doctor = await this.doctorModel.findOne({ name: doctorName });

      if (!doctor) return this.errorHandler(res, 400, { error: 'this doctor does not exist, please create doctor profile' });

      // check if appointment at same date/time with same dr already exists
      // if exists, send eror
      const existingAppointment = await this.model.findOne({
        'doctor.name': doctorName,
        date: formattedDate,
        time: formattedTime,
      });

      if (existingAppointment) return this.errorHandler(res, 400, { error: `Dr. ${doctorName} already has an appointment at this time` });

      // create new appointment if no existing appointment
      const newAppointment = await this.model.create({
        date: formattedDate,
        time: formattedTime,
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

    const formattedDate = new Date(`${date} GMT`);

    try {
      const allAppointments = await this.model.find({
        'doctor.name': doctorName,
        date: formattedDate,
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

    const formattedDate = new Date(`${date} GMT`);
    const formattedTime = Number(time);

    try {
      const appointment = await this.model.findOneAndDelete({
        date: formattedDate,
        time: formattedTime,
        'doctor.name': doctorName,
        'patient.name': patientName,
      });

      if (!appointment) {
        return this.errorHandler(res, 404, { error: 'cannot find appointment to delete' });
      }
      return this.successHandler(res, 200, { deleted: appointment });
    } catch (err) {
      this.errorHandler(res, 400, { err });
    }
  }
}

module.exports = AppointmentController;
