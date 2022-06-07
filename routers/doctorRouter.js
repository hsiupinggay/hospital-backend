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

module.exports = function doctorRouter(controller) {
  // test routes
  // router.get('/foo', controller.foo.bind(controller));
  router.post('/add', controller.addDoctor.bind(controller));
  return router;
};
