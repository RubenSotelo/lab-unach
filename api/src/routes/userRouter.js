const controller = require("../controllers/userController");
const auth = require("../controllers/authController");
const express = require("express");
const router =   express.Router();

router
  .get("/admimistradores",controller.admins)
  .get("/profesores",controller.profesores)
  .get("/alumnos",controller.alumnos)
  .get("/:email",controller.userSelec)
  .get("/",auth.authUser)
  .post("/registro", controller.crearUser);


module.exports = router;