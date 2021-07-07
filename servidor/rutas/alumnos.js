const express = require("express");
const {
  listarAlumnos,
  getAlumno,
  crearAlumno,
  borrarAlumno,
} = require("../../bd/controladores/alumnos");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const alumnos = await listarAlumnos();
  res.json(alumnos);
});

router.get("/alumno/:id", async (req, res, next) => {
  const { id } = req.params;
  const alumno = await getAlumno(id);
  if (!alumno) {
    const nuevoError = new Error(`No existe el alumno con id ${id}`);
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  res.json(alumno);
});

router.post("/alumno", async (req, res, next) => {
  const alumno = req.body;
  if (!alumno.nombre) {
    const nuevoError = new Error("No has enviado correctamente el alumno");
    nuevoError.codigo = 400;
    return next(nuevoError);
  }
  const nuevoAlumno = await crearAlumno(alumno);
  res.status(201).json(nuevoAlumno);
});

router.delete("/alumno/:id", async (req, res, next) => {
  const { id } = req.params;
  const alumno = await getAlumno(id);
  if (!alumno) {
    const nuevoError = new Error(`No existe el alumno con id ${id}`);
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  const alumnoBorrado = await borrarAlumno(id);
  if (alumnoBorrado === 1) {
    res.json(alumno);
  } else {
    const nuevoError = new Error("No se ha podido borrar el alumno");
    nuevoError.codigo = 500;
    next(nuevoError);
  }
});

module.exports = router;
