const knex = require("../../connection");

module.exports = async (req, res) => {
  try {
    const rows = await knex("users").select("*").returning("*");

    return res.status(201).json(rows);
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};
