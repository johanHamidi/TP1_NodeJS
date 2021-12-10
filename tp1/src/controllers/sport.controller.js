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
        try {
            if(sportName.name != ""){
                //ajouter dans collection mongoose
                Sport.create(sportName);
                //redirection sur lui-même
                res.redirect('/api/sports')
            }
            console.log("Le champs est vide, veuillez remplir une valeur")
            res.redirect('/api/sports')
        } catch (error) {
            console.log("Le champs n'est pas valide")
            res.redirect('/api/sports')
        }
           

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
