require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Servidor rodando na url http://localhost:${port}`)
);
