const db = require("../config/database.js");

const UserController = {
	create(req, res) {
		let user = {
			username: req.body.username,
			email: req.body.email,
		};
		let sql = "INSERT INTO users SET ?";
		db.query(sql, user, (err, result) => {
			if (err) throw err;
			console.log(result);
			res.send("User added.");
		});
	},

	update(req, res) {
		let updatedUser = req.body;
		let sql = `UPDATE users SET ? WHERE id = ${req.params.id}`;
		db.query(sql, updatedUser, (err, result) => {
			if (err) throw err;
			console.log(result);
			res.send("User updated.");
		});
	},

	getAll(req, res) {
		let sql = "SELECT * FROM users";
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},

	getById(req, res) {
		let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},

	getAllUsersOrders(req, res) {
		let sql =
			"SELECT users.username, orders.order_number FROM users INNER JOIN orders ON users" +
			".id = orders.user_id;";
		db.query(sql, (err, result) => {
			if (err) throw err;
			res.send(result);
		});
	},
};

module.exports = UserController;
