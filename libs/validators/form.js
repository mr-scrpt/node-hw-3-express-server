const Joi = require('@hapi/joi');

module.exports = async (name, mail, text) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    text: Joi.string().min(150).max(6000).required(),
    mail: Joi.string().min(5).max(60).required()
  });

  try {
    return status = await schema.validateAsync({ name, mail, text });
  }
  catch (err) {
    return err;
  }
};



