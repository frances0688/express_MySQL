const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController.js");

router.get("/", CategoryController.getAll);
router.get("/getById/:id", CategoryController.getById);
router.post("/create", CategoryController.create);
router.put("/update/:id", CategoryController.update);

module.exports = router;
