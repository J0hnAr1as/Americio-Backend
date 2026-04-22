const express = require("express");
const app = express();
const tarifasRoutes = require("./routes/tarifas");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: "Todo bien, todo bien...",
    message: "API funcionando 🚀",
  });
});

app.use("/api/tarifas", tarifasRoutes);

module.exports = app;