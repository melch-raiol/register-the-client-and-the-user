const listUsers = require("../controllers/linsting/listUsers");

const router = require("express").Router();

router.get("/listUsers", listUsers);

module.exports = router;
