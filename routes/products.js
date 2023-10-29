const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.get("/", ProductController.getAll);
router.get("/getAllCategoriesProducts", ProductController.getAllCategoriesProducts);
router.get("/getById/:id", ProductController.getById);
router.get("/orderDescId", ProductController.orderDescId);
router.get("/getByName/:name", ProductController.getByName);
router.post("/create", ProductController.create);
router.post("/assignCategory", ProductController.assignCategory);
router.put("/update/:id", ProductController.update);
module.exports = router;
