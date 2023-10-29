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
    }
};

module.exports = ProductController;
