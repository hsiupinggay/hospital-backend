/* eslint-disable max-len */
/*
 * ========================================================
 * ========================================================
 *
 *                       consts
 *
 * ========================================================
 * ========================================================
 */
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

/*
* ========================================================
* ========================================================
*
*                    Server middleware
*
* ========================================================
* ========================================================
*/
// Initialise Express instance
const app = express();
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Expose the files stored in the public folder
app.use(express.static('public'));

/*
 * ========================================================
 * ========================================================
 *
 *                  Routes + Controllers
 *
 * ========================================================
 * ========================================================
 */

// const routes
const doctorRouter = require('./routers/doctorRouter');
const patientRouter = require('./routers/patientRouter');
const appointmentRouter = require('./routers/appointmentRouter');

// const controllers
const DoctorController = require('./controllers/doctorController');
const PatientController = require('./controllers/patientController');
const AppointmentController = require('./controllers/appointmentController');

// const models
const AppointmentModel = require('./models/appointmentModel');
const PatientModel = require('./models/patientModel');
const DoctorModel = require('./models/doctorModel');

// initialise controllers
const patientController = new PatientController(PatientModel);
const doctorController = new DoctorController(DoctorModel);
const appointmentController = new AppointmentController(AppointmentModel, PatientModel, DoctorModel);

// set up routes
app.use('/doctor', doctorRouter(doctorController));
app.use('/patient', patientRouter(patientController));
app.use('/appointment', appointmentRouter(appointmentController));

/*
 * ========================================================
 * ========================================================
 *
 *        Set Express to listen on the given port
 *
 * ========================================================
 * ========================================================
 */

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3004;
// Only connect to port after connecting to db
mongoose.connect(uri)
  .then(() => {
    app.listen(PORT);
    console.log(`connected to port ${PORT}`);
    console.log('connected to db');
  })
  .catch((err) => console.log(err));
