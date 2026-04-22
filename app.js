const express = require("express");
const app = express();
const tarifasRoutes = require("./routes/tarifas");
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ ok: true, message: "Americio Backend up", endpoints: ["/api/tarifas"] });
});

app.use("/api/tarifas", tarifasRoutes);

module.exports = app;