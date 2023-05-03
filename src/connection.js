const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost", //process.env.DB_HOST,
    user: "postgres", //process.env.DB_USER,
    password: "123456", //process.env.DB_PASSWORD,
    database: "users_registers", //process.env.DB_DATABASE,
  },
});

module.exports = knex;
