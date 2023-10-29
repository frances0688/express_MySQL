const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController.js");

router.post("/create", CategoryController.create);

module.exports = router;
