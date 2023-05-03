const express = require("express");

const login = require("./controllers/login");

const routes = express();

routes.post("/login", login);

routes.use(require("./routers/routerUsers"));
routes.use(require("./routers/routerList"));
routes.use(require("./routers/routerUpdateUser"));
routes.use(require("./routers/routerDeleteUser"));

module.exports = routes;
