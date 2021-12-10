const express = require('express');
const router = express.Router();


const SportController = require('../controllers/sport.controller');
const sportController = new SportController();
const AthleteController = require('../controllers/athlete.controller');
const Athlete = require('../models/athlete.model');
const athleteController = new AthleteController();

//Lister les sports
router.get('/', async (req, res) => {
   const listSport =  await sportController.list(req, res);
   const listAthlete = await athleteController.list(req, res);
   res.render('sports', {listSport, listAthlete});
});

//Consulter les athlètes d'un sport 
router.get('/:sportId/athletes', async (req, res) => {
  const sportId = req.params.sportId;
  const listAthleteIdBySport = await sportController.listAthleteIdBySport(sportId, res);
  const listAthleteBySport = await Athlete.find({ '_id': {$in : listAthleteIdBySport }});
  res.render('sports', {listAthleteBySport});
});

//Creer un sport
router.post('/createSports', (req, res) => {
    //Execution lors de la validation du formulaire dans l'index.html
    const sportName = req.body;
    sportController.insertSport(sportName, res);

  })


//Ajouter un Athlete dans un sport
router.post('/addAthleteInSports', (req, res) => {
  const monSport = req.body.sportId;
  const monAthlete = req.body.AthleteId;
  sportController.addAthleteInSport(monSport, monAthlete);
})
  

module.exports = router;
