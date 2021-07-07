const express = require("express");
const { listarExamenes } = require("../../bd/controladores/examenes");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const examenes = await listarExamenes();
  res.json(examenes);
});

module.exports = router;
