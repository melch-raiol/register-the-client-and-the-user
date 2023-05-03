const express = require("express");

const listUsers = require("./controllers/linsting/listUsers");
const deleteUser = require("./controllers/delete/deleteUsers");
const updatedUser = require("./controllers/update/updateUsers");
const login = require("./controllers/login");

const routes = express();

routes.post("/login", login);

routes.use(require("./routers/routerUsers"));

routes.get("/listUsers", listUsers);
routes.delete("/deleteUser/:id", deleteUser);
routes.put("/updateUser/:id", updatedUser);

module.exports = routes;
