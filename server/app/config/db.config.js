module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// const mysql = require("mysql2");

// /** CONNEXION TO DATABASE */
// const mysqlConnection = mysql.createConnection({
//   host: "localhost",
//   user: "miyuna",
//   password: "",
//   database: "resume_builder",
// });

// mysqlConnection.connect((err) => {
//   if (err) {
//      return console.error("Error:" + err.message);
//   }
//   console.log("Database".pink,"Connection Successfull");
  
//   const db = "CREATE DATABASE resume_builder";

//   const table = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTO_INCREMENT, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)";

//   mysqlConnection.query(table, (err, results, fields) => {
//     console.log("Users table created successfully");
//   });

//   mysqlConnection.end((err) => {
//     if (err) {
//       return console.log(err.message);
//     };
//   });
// });

// module.exports = mysqlConnection;