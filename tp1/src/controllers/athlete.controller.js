const Athlete = require('../models/athlete.model');
const Sport = require('../models/sport.model');
let mongoose = require('mongoose');

class AthleteController {
    /**
     * Lister tous les athletes
     */
    async list(req, res) {
        const athlete = await Athlete.find();
        return athlete
    }

    async insertAthlete(formAthlete, res){
       
       try {
            if(formAthlete.firstName == "" && formAthlete.lastName == "" && formAthlete.gender == "" && formAthlete.country == "" ){
                console.log("Le champs est vide, veuillez remplir une valeur")
                res.redirect('/api/athletes')
            } else {
                //ajouter dans collection mongoose
                Athlete.create(formAthlete);
                //redirection sur lui-même
                res.redirect('/api/athletes')
            }
        
        } catch (error) {
            console.log("Le champs n'est pas valide")
            res.redirect('/api/athletes')
        }
        
    }

    async listSportsByAthlete(athleteId, res) {
        const listSportsAthlete = await Sport.find({ 'athletes': {$in : mongoose.Types.ObjectId(athleteId) }});
        console.log(listSportsAthlete);
        return listSportsAthlete;
    }
}

module.exports = AthleteController;
