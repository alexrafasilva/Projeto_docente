/*AQUI EXISTE UMA ROTA POST ENCARREGADA DO 'SAVE' DOS DOCENTES, NA LINHA 13
/E COM RETORNO DE STATUS 201(CREATED) https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/201.
*/
/*TEMOS TAMBÉM UMA ROTA GET, PARA A VISUALIZAÇÃO DO DOCENTES,
ESSA ROTA É RESPONSÁVEL POR ENCONTRAR OS DADOS DOS DOCENTES
ATRAVÉS DO 'FIND', NA LINHA 28 E DEPOIS 
RETORNA 200 (OK) https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/200*/

const express = require('express');
const router = express.Router();
const Docente = require('./docenteModel');

router.post('/docentes', async (req, res) => {
  const { nome, titulacao, email, lattes } = req.body;

  try {
    const docente = new Docente({ nome, titulacao, email, lattes });
    const newDocente = await docente.save();
    res.status(201).json(newDocente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao cadastrar docente. Por favor, tente novamente.' });
  }
});

router.get('/docentes', async (req, res) => {
  try {
    const docentes = await Docente.find();
    res.status(200).json(docentes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar docentes. Por favor, tente novamente.' });
  }
});

module.exports = router;
