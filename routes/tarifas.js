const express = require("express");
const router = express.Router();
const oroController = require("../controllers/oroController");

// POST → guardar datos de oro
router.post("/", oroController.createOro);

// GET → obtener últimos registros
router.get("/", oroController.getOro);

module.exports = router;
