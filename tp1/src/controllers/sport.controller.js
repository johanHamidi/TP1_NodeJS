const Sport = require('../models/sport.model');
const mongoose = require('mongoose');

class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();
        return sports
    }


    async getNameSportById(sportId ,res){
        const SportById = await Sport.findById(sportId);
        return SportById.name;
    }


    async insertSport(sportName, res){
        //ajouter dans collection mongoose
        Sport.create(sportName);
        //redirection sur lui-même
        res.redirect('/api/sports')
    }

    
    async listAthleteIdBySport(sportId ,res){
        const SportById = await Sport.findById(sportId);
        return SportById.athletes;
    }



    //Ajouter Athlete dans un sport
    async addAthleteInSport(sportId, athleteId){
        const monSport = await Sport.findById(sportId);
        const monAthlete = athleteId;
        monSport.athletes.push(mongoose.Types.ObjectId(monAthlete));
        monSport.save();
    }

}

module.exports = SportController;
