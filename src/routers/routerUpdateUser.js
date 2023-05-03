const updatedUser = require("../controllers/update/updateUsers");

const router = require("express").Router();

router.put("/updateUser/:id", updatedUser);

module.exports = router;
