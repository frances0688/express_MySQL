const db = require("../config/database.js");

const ProductController = {
    create(req, res) {
        let product = {
            product_name: req.body.product_name,
            price: req.body.price,
            description: req.body.description
        };
        let sql = "INSERT INTO products SET ?";
        db.query(sql, product, (err, result) => {
            if (err) 
                throw err;
            console.log(result);
            res.send("Product added.");
        });
    },

    assignCategory(req, res) {
        let categoryproduct = {
            product_id: req.body.product_id,
            category_id: req.body.category_id
        };
        let sql = "INSERT INTO categoriesProducts SET ?";
        db.query(sql, categoryproduct, (err, result) => {
            if (err) 
                throw err;
            console.log(result);
            res.send("Category assigned to product.");
        });
    },

    update(req, res) {
        let updatedProduct = req.body;
        let sql = `UPDATE products SET ? WHERE id = ${req.params.id}`;
        db.query(sql, updatedProduct, (err, result) => {
            if (err) 
                throw err;
            console.log(result);
            res.send("Product updated.");
        });
    },

    getAll(req, res) {
        let sql = "SELECT * FROM products";
        db.query(sql, (err, result) => {
            if (err) 
                throw err;
            res.send(result);
        });
    },

    getAllCategoriesProducts(req, res) {
        let sql = "SELECT product_name, category_name FROM categoriesProducts INNER JOIN categories" +
                " ON categories.id = categoriesProducts.category_id INNER JOIN products ON produc" +
                "ts.id = categoriesProducts.product_id;";
        db.query(sql, (err, result) => {
            if (err) 
                throw err;
            res.send(result);
        });
    },

    getById(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) 
                throw err;
            res.send(result);
        });
    },

    orderDescId(req, res) {
        let sql = "SELECT * FROM products ORDER BY id DESC";
        db.query(sql, (err, result) => {
            if (err) 
                throw err;
            res.send(result);
        });
    },

    getByName(req, res) {
        let sql = `SELECT * FROM products WHERE product_name = "${req.params.name}"`;
        db.query(sql, (err, result) => {
            if (err) 
                throw err;
            res.send(result);
        });
    },

    deleteById(req, res) {
        try {
            db.query(`DELETE FROM categoriesProducts WHERE product_id = ${req.params.id}`);
            db.query(`DELETE FROM products WHERE id = ${req.params.id}`);
            res.send("Product deleted.");
        } catch (err) {
            console.error(err);
            res
                .status(500)
                .json({error: "Error deleting the product"});
        }
    }
};

module.exports = ProductController;
