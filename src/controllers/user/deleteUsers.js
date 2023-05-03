const knex = require("../../connection");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const { rowCount } = await knex("users")
      .delete()
      .where("id", id)
      .returning("id")
      .debug();

    if (rowCount < 1) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};
