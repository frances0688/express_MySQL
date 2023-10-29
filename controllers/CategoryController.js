const db = require("../config/database.js");

const CategoryController = {
    create(req, res) {
        let category = {
            category_name: req.body.category_name
        };
        let sql = "INSERT INTO categories SET ?";
        db.query(sql, category, (err, result) => {
            if (err) 
                throw err;
            console.log(result);
            res.send("Category added.");
        });
    }
};

module.exports = CategoryController;
