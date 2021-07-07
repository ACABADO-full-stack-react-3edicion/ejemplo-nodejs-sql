const { Op } = require("sequelize");
const Alumno = require("../schemas/Alumno");

const crearAlumno = async (alumno) => {
  try {
    const nuevoAlumno = await Alumno.create(alumno);
    return nuevoAlumno;
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

const borrarAlumno = async (id) => {
  const alumnoBorrado = await Alumno.destroy({
    where: {
      id,
    },
  });
  return alumnoBorrado;
};

const listarAlumnos = async () => {
  const alumnos = await Alumno.findAll();
  return alumnos;
};

const getAlumno = async (id) => {
  const alumno = await Alumno.findByPk(id);
  return alumno;
};

module.exports = {
  listarAlumnos,
  getAlumno,
  crearAlumno,
  modificarAlumno,
  borrarAlumno,
};
