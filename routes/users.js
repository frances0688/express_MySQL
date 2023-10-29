const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");

router.post("/create", UserController.create);
router.put("/update/:id", UserController.update);

module.exports = router;
