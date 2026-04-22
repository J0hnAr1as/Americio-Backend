const express = require("express");
const router = express.Router();
const tariController = require("../controllers/tarifasController");

// POST → guardar datos de tarifas
router.post("/", tarifasController.createTarifa);

// GET → obtener últimos registros
router.get("/", tarifasController.getTarifas);

module.exports = router;
