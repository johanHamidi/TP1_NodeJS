const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

router.get('/', async (req, res) => {
   const listAthlete =  await athleteController.list(req, res);
   res.render('athletes', {listAthlete, main: true});
});

router.get('/:athleteId/sports', async (req, res) => {
  const athleteId = req.params.athleteId;
  const listSportsAthlete =  await athleteController.listSportsByAthlete(athleteId, res);
  const athleteName = await athleteController.getNameAthleteById(athleteId, res);
  res.render('athletes', {listSportsAthlete, athleteName, main: false});
});

router.post('/createAthlete', (req, res) => {
    //Execution lors de la validation du formulaire dans l'index.html
    const formAthlete = req.body;
    athleteController.insertAthlete(formAthlete, res);
  })

module.exports = router;
