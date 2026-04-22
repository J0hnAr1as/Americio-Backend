const db = require("../firebase");

module.exports = async (req, res) => {
  try {
    // 🔴 SOLO ACEPTAR POST (ESP32)
    if (req.method === "POST") {
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

      // 🔴 VALIDACIÓN BÁSICA (evita datos vacíos)
      if (!price || !date) {
        return res.status(400).json({
          error: "Datos incompletos"
        });
      }

      // 🔥 GUARDAR EN FIRESTORE
      const ref = await db.collection("oro").add({
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

      return res.status(200).json({
        ok: true,
        id: ref.id
      });
    }

    // 🟢 GET → obtener datos
    if (req.method === "GET") {
      const snapshot = await db
        .collection("oro")
        .orderBy("createdAt", "desc")
        .limit(50)
        .get();

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      return res.status(200).json(data);
    }

    // ❌ Método no permitido
    res.status(405).json({ error: "Método no permitido" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en servidor" });
  }
};