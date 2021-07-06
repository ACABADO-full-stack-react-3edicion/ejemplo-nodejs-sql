const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  username: "mariogl",
  password: "mariogl",
  database: "pruebas",
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
