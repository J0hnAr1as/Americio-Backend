const db = require("../config/firebase");

exports.createTarifa = async (req, res) => {
  try {
    const {
      date,
      timestamp,
      metal,
      exchange,
      currency,
      price,
      prev_close_price,
      ch,
      chp,
      price_gram_24k,
      price_gram_22k,
      price_gram_21k,
      price_gram_20k,
      price_gram_18k,
      price_gram_16k,
      price_gram_14k,
      price_gram_10k
    } = req.body;

    // Validación básica
    if (!price || !date) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    const ref = await db.collection("tarifas").add({
      date,
      timestamp,
      metal,
      exchange,
      currency,
      price,
      prev_close_price,
      ch,
      chp,
      price_gram_24k,
      price_gram_22k,
      price_gram_21k,
      price_gram_20k,
      price_gram_18k,
      price_gram_16k,
      price_gram_14k,
      price_gram_10k,
      createdAt: new Date()
    });

    return res.status(201).json({ ok: true, id: ref.id });
  } catch (error) {
    console.error("Error creando tarifa:", error);
    res.status(500).json({ error: "Error en servidor" });
  }
};

// Obtener registros de tarifas
exports.getTarifas = async (req, res) => {
  try {
    const snapshot = await db
      .collection("tarifas")
      .orderBy("createdAt", "desc")
      .limit(50)
      .get();

    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error obteniendo tarifas:", error);
    res.status(500).json({ error: "Error en servidor" });
  }
};
