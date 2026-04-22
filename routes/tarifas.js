const express = require("express");
const router = express.Router();

// Importa el controller con el nombre correcto
const tarifasController = require("../controllers/tarifasController");
const validateTarifas = require("../middlewares/validatetarifas");

// POST → guardar tarifa
router.post("/", validateTarifas, tarifasController.createTarifa);

// GET → listar tarifas
router.get("/", tarifasController.getTarifas);

module.exports = router;

