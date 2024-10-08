const controlerAlumno = require("../controllers/authController");
const express = require("express");
const routeAlumno = express.Router();

routeAlumno
  .get("/login/:email", controlerAlumno.authUser)

module.exports = routeAlumno;