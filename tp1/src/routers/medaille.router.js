const express = require('express');
const router = express.Router();


const MedailleController = require('../controllers/medaille.controller');
const medailleController = new MedailleController();


router.post('/', async (req, res) => {
    if(req.body.action == 'nbMedaille'){
        const nbMedaille =  await medailleController.getTotalMedaille(req, res);
        res.json({nbMedaille : nbMedaille});
    }
    else if(req.body.action == 'medailleParPays'){
        const country = req.body.pays;
        const nbMedailleByCountry = await medailleController.getMedailleByCountry(req, res, country);
        res.json({medailleParPays : nbMedailleByCountry});
    }
    else if(req.body.action == 'medailleParRang'){
        const rang = req.body.rang;
        const nbMedailleByRang = await medailleController.getMedailleByRang(req, res, rang);
        res.json({medailleParRang : nbMedailleByRang});
    }

  })

module.exports = router;

//1 routes webhook qui appel les fonction avec un parametre dans la requete