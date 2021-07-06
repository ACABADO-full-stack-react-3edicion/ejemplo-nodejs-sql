const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Alumno = require("./Alumno");

const Examen = sequelize.define(
  "Examen",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    alumno: DataTypes.INTEGER,
  },
  {
    tableName: "examenes",
    timestamps: false,
  }
);

module.exports = Examen;
