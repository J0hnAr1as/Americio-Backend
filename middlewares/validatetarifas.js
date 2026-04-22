const Joi = require("joi");

const oroSchema = Joi.object({
  date: Joi.string().required(),
  timestamp: Joi.string().optional(),
  metal: Joi.string().optional(),
  exchange: Joi.string().optional(),
  currency: Joi.string().optional(),
  price: Joi.number().required(),
  prev_close_price: Joi.number().optional(),
  ch: Joi.number().optional(),
  chp: Joi.number().optional(),
  price_gram_24k: Joi.number().optional(),
  price_gram_22k: Joi.number().optional(),
  price_gram_21k: Joi.number().optional(),
  price_gram_20k: Joi.number().optional(),
  price_gram_18k: Joi.number().optional(),
  price_gram_16k: Joi.number().optional(),
  price_gram_14k: Joi.number().optional(),
  price_gram_10k: Joi.number().optional()
});

module.exports = (req, res, next) => {
  const { error } = oroSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
