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

module.exports = function patientRouter(controller) {
  // test routes
  // router.get('/foo', controller.foo.bind(controller));
  router.post('/add', controller.addPatient.bind(controller));
  return router;
};
