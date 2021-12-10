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
        res.redirect('sports')
    }

    /*async listAthleteAllSports(){
        const sports = await Sport.find();
        const athleteSport = [];
        sports.forEach(sports => {
            for(var i=0; i<=sports.athletes.length; i++)
            {
                if(sports.athletes[i]!='' || sports.athletes[i]!=null || sports.athletes[i]!=undefined)
                {
                    athleteSport.push(sports.athletes[i]);
                }
            }
        });
        return athleteSport;
    }*/

    
    async listAthleteBySport(sportId, athleteId ,res){
        const MalistAthletebySport = await Sport.findById(sportId).where('athletes').in(athleteId);
        return MalistAthletebySport;
    }

    async addAthleteInSport(sportId, athleteName){
        const monSport = await Sport.findById(sportId);
        const monAthlete = athleteName;

    }

}

module.exports = SportController;
