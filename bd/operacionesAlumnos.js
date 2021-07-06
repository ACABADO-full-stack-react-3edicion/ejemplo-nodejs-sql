const { Op } = require("sequelize");
const Alumno = require("./schemas/Alumno");

const crearAlumno = async () => {
  try {
    const nuevoAlumno = await Alumno.create({
      nombre: "Pepito",
      dni: "98888282W",
      nota: 10,
    });
    console.log(nuevoAlumno.nombre);
  } catch (err) {
    console.log("No se ha podido crear el alumno.");
    console.log(err.message);
  }
};

const modificarAlumno = async () => {
  try {
    const alumnoModificado = await Alumno.update(
      {
        nota: 10,
      },
      {
        where: {
          nota: {
            [Op.lt]: 5,
          },
        },
      }
    );
    console.log(alumnoModificado);
  } catch (err) {
    console.log("No se ha podido modificar el alumno.");
    console.log(err.message);
  }
};

const borrarAlumno = async () => {
  const alumnoBorrado = await Alumno.destroy({
    truncate: true,
  });
  console.log(alumnoBorrado);
};

const listarAlumnos = async () => {
  const alumnos = await Alumno.findAll({
    where: {
      dni: {
        [Op.like]: "2%",
      },
    },
  });
  for (const alumno of alumnos) {
    console.log(`${alumno.id} -> ${alumno.nombre} ${alumno.apellidos}`);
  }
};

module.exports = {
  listarAlumnos,
  crearAlumno,
  modificarAlumno,
  borrarAlumno,
};
