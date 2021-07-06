const Alumno = require("./schemas/Alumno");
const Examen = require("./schemas/Examen");

const crearExamen = async () => {
  Examen.bulkCreate([
    {
      alumno: 11,
    },
    {
      alumno: 13,
    },
    {
      alumno: 13,
    },
  ]);
};

const listarExamenes = async () => {
  const examenes = await Examen.findAll({
    include: {
      model: Alumno,
      required: true,
    },
  });
  for (const examen of examenes) {
    console.log(
      examen.id,
      examen.Alumno.nombre,
      examen.Alumno.apellidos,
      examen.Alumno.nota
    );
  }
};

module.exports = {
  crearExamen,
  listarExamenes,
};
