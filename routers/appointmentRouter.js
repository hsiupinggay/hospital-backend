/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */

const express = require('express');

const router = express.Router();
/*
 * ========================================================
 * ========================================================
 *
 *            appointment router with various paths
 *
 * ========================================================
 * ========================================================
 */

module.exports = function appointmentRouter(controller) {
  // test routes
  router.get('/get', controller.getAppointment.bind(controller));
  router.post('/add', controller.addAppointment.bind(controller));
  return router;
};
