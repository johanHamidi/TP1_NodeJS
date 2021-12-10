const express = require('express');
const router = express.Router();


const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

//Lister les sports
router.get('/sports/', async (req, res) => {
   const listSport =  await sportController.list(req, res);
   res.render('sports', {listSport});
});

//Consulter les athlètes d'un sport 
router.get('/sports/:sportId/athletes', async (req, res) => {
  const sportId = req.params.sportId;
  const listAthleteBySport =  await sportController.listAthleteBySports(sportId, res);
  res.render('sports', {listAthleteBySport});
});

//Creer un sport
router.post('/createSports', (req, res) => {
    //Execution lors de la validation du formulaire dans l'index.html
    const sportName = req.body;
    sportController.insertSport(sportName, res);

  })


//Ajouter un nouvel Athlete dans un sport
router.post('/addAthleteInSports', (req, res) => {
  /* console.log(req.body);
  console.log(req.body.sportName);
  const sportId = req.params.sportId;
  sportController.addAthleteInSport(sportName, res);*/

})
  

module.exports = router;
