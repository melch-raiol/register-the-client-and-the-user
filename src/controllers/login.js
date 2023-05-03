const knex = require("../connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passwordJwt = require("../passwordJwt");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json("É obrigatório email e senha");
  }

  try {
    const user = await knex("users").where({ email }).first();

    if (user.rowCount < 1) {
      return res.status(404).json({ message: "Email ou password invalida" });
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      return res.status(400).json({ mensagem: "Email ou password invalida" });
    }

    const token = jwt.sign({ id: user.id }, passwordJwt, {
      expiresIn: "8h",
    });

    const { password: _, ...loginedUser } = user;

    return res.status(201).json({ user: loginedUser, token });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
