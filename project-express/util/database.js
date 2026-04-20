// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// });

// module.exports = pool.promise();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME, // database
  process.env.DB_USER, // username
  process.env.DB_PASSWORD, // password
  {
    host: process.env.DB_HOST,
    dialect: "mysql", // IMPORTANT
  },
);

module.exports = sequelize;
