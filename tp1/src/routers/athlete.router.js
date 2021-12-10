const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

router.get('/athletes/', async (req, res) => {
   const listAthlete =  await athleteController.list(req, res);
   res.render('athletes', {listAthlete});
});

router.post('/createAthlete', (req, res) => {
    //Execution lors de la validation du formulaire dans l'index.html
    const formAthlete = req.body;
    console.log(formAthlete);
  })

module.exports = router;
