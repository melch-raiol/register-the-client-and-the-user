const knex = require("../../connection");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const searchUser = await knex("users").where({ id }).first();

    if (!searchUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const updatedUser = await knex("users")
      .update({ name, email, password })
      .where("id", id)
      .returning("*");

    return res.status(204).json(updatedUser);
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};
