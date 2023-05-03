const registerUser = require("../controllers/users/registerUsers");

const router = require("express").Router();

router.post("/registerUser", registerUser);

module.exports = router;
