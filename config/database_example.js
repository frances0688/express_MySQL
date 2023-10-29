const mysql = require("mysql2");
const db = mysql.createConnection({host: "localhost", user: "your_username", password: "your_password", database: "your_database_name"});

db.connect();

module.exports = db;
