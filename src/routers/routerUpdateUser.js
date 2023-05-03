const updatedUser = require("../controllers/user/updateUsers");

const router = require("express").Router();

router.put("/updateUser/:id", updatedUser);

module.exports = router;
