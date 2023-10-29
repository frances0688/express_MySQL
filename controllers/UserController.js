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
};

module.exports = UserController;
