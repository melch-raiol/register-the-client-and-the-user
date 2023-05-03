const registerUser = require("../controllers/users/registerUsers");
const validateBodyOfRequest = require("../middlewares/validateBodyOfRequest");
const schemaUser = require("../validations/schemaUser");

const router = require("express").Router();

router.post("/registerUser", validateBodyOfRequest(schemaUser), registerUser);

module.exports = router;
