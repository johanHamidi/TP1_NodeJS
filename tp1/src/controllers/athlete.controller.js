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
        //ajouter dans collection mongoose
        Athlete.create(formAthlete);
        //redirection sur lui-même
        res.redirect('athletes')
    }

    async listSportsByAthlete(athleteId, res) {
        const listSportsAthlete = await Sport.find({ 'athletes': {$in : mongoose.Types.ObjectId(athleteId) }});
        console.log(listSportsAthlete);
        return listSportsAthlete;
    }
}

module.exports = AthleteController;
