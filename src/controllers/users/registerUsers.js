const bcrypt = require("bcrypt");
const knex = require("../../connection");

module.exports = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("ok");
  if (!name) {
    return res.status(404).json("O campo username é obrigatório");
  }

  if (!email) {
    return res.status(404).json("O campo email é obrigatório");
  }

  if (!password) {
    return res.status(404).json("O campo senha é obrigatório");
  }

  if (password.length < 5) {
    return res
      .status(404)
      .json("A senha deve conter, no mínimo, 5 caracteres.");
  }

  try {
    const searchUser = await knex("users").where({ name }).first();

    if (searchUser)
      return res.status(400).json("O username informado já existe");

    const encryptingThePassword = await bcrypt.hash(password, 10);

    const newUser = await knex("users").insert({
      name,
      email,
      password: encryptingThePassword,
    });

    if (!newUser) return res.status(400).json("O usuário não foi cadastrado.");

    return res.status(200).json("Usuário cadastrado com sucesso.");
  } catch (error) {
    return res.status(400).json(req.user);
  }
};
