const listUsers = require("../controllers/user/listUsers");

const router = require("express").Router();

router.get("/listUsers", listUsers);

module.exports = router;
