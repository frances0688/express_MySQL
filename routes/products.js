const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/create", ProductController.create);
router.post("/assigncategory", ProductController.assignCategory);
router.put("/update/:id", ProductController.update);
module.exports = router;
