const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/create", ProductController.create);
router.post("/assigncategory", ProductController.assignCategory);
module.exports = router;
