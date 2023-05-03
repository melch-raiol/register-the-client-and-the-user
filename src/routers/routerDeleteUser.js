const deleteUser = require("../controllers/user/deleteUsers");

const router = require("express").Router();

router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
