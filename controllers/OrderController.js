const db = require("../config/database.js");

const OrderController = {
	create(req, res) {
		let order = {
			order_number: req.body.order_number,
			user_id: req.body.user_id,
			created: new Date(),
		};
		let sql = "INSERT INTO orders SET ?";
		db.query(sql, order, (err, result) => {
			if (err) throw err;
			console.log(result);
			res.status(201).send("Order added.");
		});
	},

	getAll(req, res) {
		let sql = "SELECT * FROM orders";
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.status(200).send(result);
		});
	},
};

module.exports = OrderController;
