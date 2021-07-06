const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Examen = require("./Examen");

const Alumno = sequelize.define(
  "Alumno",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    apellidos: DataTypes.STRING(32),
    dni: {
      type: DataTypes.STRING(9),
      unique: true,
    },
    nota: {
      type: DataTypes.DECIMAL(3, 2),
      validate: {
        max: 10,
        min: 0,
      },
    },
  },
  {
    tableName: "alumnos",
    timestamps: false,
  }
);

Alumno.hasMany(Examen, { foreignKey: "alumno" });
Examen.belongsTo(Alumno, { foreignKey: "alumno" });

module.exports = Alumno;
