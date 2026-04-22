const express = require("express");
const app = express();
const tarifasRoutes = require("./routes/tarifas");
app.use(express.json());
app.use("/api/tarifas", tarifasRoutes);

module.exports = app;