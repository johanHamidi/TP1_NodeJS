const Sport = require('../models/sport.model');

class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();
        return sports
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

    async addAthleteInSport(sportId, athleteName){
        const monSport = await Sport.findById(sportId);
        const monAthlete = athleteName;

    }

}

module.exports = SportController;
