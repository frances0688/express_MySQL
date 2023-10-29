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
    }
};

module.exports = ProductController;
