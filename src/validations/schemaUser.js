const joi = require("joi");

const schemaUser = joi.object({
  name: joi
    .string()
    .pattern(/^[\p{L} ]+$/u)
    .min(3)
    .max(40)
    .trim()
    .normalize()
    .required()
    .required()
    .messages({
      "any.required": "O campo nome é obrigatório!",
      "string.empty": "O campo nome é obrigatório!",
      "string.min": "O campo nome deve ter pelo menos {#limit} caracteres",
      "string.max": "O campo nome deve ter no máximo {#limit} caracteres",
      "string.pattern.base": "O campo nome deve conter apenas letras",
    }),

  email: joi
    .string()
    .email({ tlds: { allow: false }, minDomainSegments: 2 })
    .trim()
    .normalize()
    .required()
    .messages({
      "string.email": "O campo email precisa ter um formato válido",
      "any.required": "O campo email é obrigatório",
      "string.empty": "O campo email é obrigatório",
    }),

  password: joi.string().min(5).required().messages({
    "any.required": "O campo senha é obrigatório!",
    "string.empty": "O campo senha é obrigatório",
    "string.min": "A senha precisa conter, no mínimo, {#limit} caracteres",
  }),
});

module.exports = schemaUser;
