const express = require("express");
const app = express();
const db = require("./config/database");
const PORT = 3000;

app.use(express.json());
app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));

app.get("/createdb", (req, res) => {
	let sql = "CREATE DATABASE expressDB";
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send("Database created.");
	});
});

app.get("/createProductsTable", (req, res) => {
	let sql =
		"CREATE TABLE products(id INT AUTO_INCREMENT,product_name VARCHAR(255), price FLO" +
		"AT, description VARCHAR (255), PRIMARY KEY(id))";
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send("Products table created.");
	});
});

app.get("/createCategoriesTable", (req, res) => {
	let sql =
		"CREATE TABLE categories(id INT AUTO_INCREMENT,category_name VARCHAR(255), PRIMAR" +
		"Y KEY(id))";
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send("Categories table created.");
	});
});

app.get("/createCategoriesProductsTable", (req, res) => {
	let sql =
		"CREATE TABLE categoriesProducts(id INT AUTO_INCREMENT, product_id INT, category_" +
		"id INT, PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES products(id), FOREIGN" +
		" KEY(category_id) REFERENCES categories(id))";
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send("CategoriesProducts table created.");
	});
});

app.get("/createUsersTable", (req, res) => {
	let sql =
		"CREATE TABLE users(id INT AUTO_INCREMENT,username VARCHAR(255), email VARCHAR(25" +
		"5), PRIMARY KEY(id))";
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send("Users table created.");
	});
});

app.get("/createOrdersTable", (req, res) => {
	let sql =
		"CREATE TABLE orders(id INT AUTO_INCREMENT, order_number INT, created DATETIME, P" +
		"RIMARY KEY(id))";
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send("Orders table created.");
	});
});

app.get("/createUsersOrdersTable", (req, res) => {
	let sql =
		"CREATE TABLE usersOrders(id INT AUTO_INCREMENT, user_id INT, order_id INT, PRIMA" +
		"RY KEY(id),FOREIGN KEY(user_id) REFERENCES users(id), FOREIGN KEY(order_id) REFE" +
		"RENCES orders(id))";
	db.query(sql, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send("UsersOrders table created.");
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
