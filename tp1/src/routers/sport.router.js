const express = require('express');
const router = express.Router();

const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

router.get('/sports/', async (req, res) => {
   const listSport =  await sportController.list(req, res);
   res.render('sports', {listSport});
});

router.post('/createSports', (req, res) => {
    //Execution lors de la validation du formulaire dans l'index.html
    const formSport = req.body;
    console.log(formSport);
  })

module.exports = router;
