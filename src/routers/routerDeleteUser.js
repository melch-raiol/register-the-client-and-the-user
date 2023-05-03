const deleteUser = require("../controllers/delete/deleteUsers");

const router = require("express").Router();

router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
