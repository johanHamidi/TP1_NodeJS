const Sport = require('../models/sport.model');

class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();

       /* res.json({
            count: sports.length,
            sports: sports.name
        });*/
        /*sports.forEach(sports => {
            console.log(sports.name);
        });*/
        return sports
    }

    async insertSport(sportName, res){
        //ajouter dans collection mongoose
        Sport.create(sportName);
        //redirection sur lui-même
        res.redirect('sports')
    }

    async listAthleteBySports(sportId, res){
        const MalistAthletebySport = await Sport.findById(sportId);
        return MalistAthletebySport;
    }

    
    /*async addAthleteInSport(sportId, athleteId ,res){
        const MalistAthletebySport = await Sport.findById(sportId);
        return MalistAthletebySport;
    }*/

}

module.exports = SportController;
