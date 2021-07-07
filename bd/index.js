require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: "mysql",
  // logging: false,
});

/* sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("No me he podido conectar a la base de datos");
    console.log(err.message);
  }); */

module.exports = sequelize;
