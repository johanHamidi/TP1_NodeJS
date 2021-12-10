const Athlete = require('../models/athlete.model');

class AthleteController {
    /**
     * Lister tous les athletes
     */
    async list(req, res) {
        const athlete = await Athlete.find();

       /* res.json({
            count: sports.length,
            sports: sports.name
        });*/
        /*sports.forEach(sports => {
            console.log(sports.name);
        });*/
        return athlete
    }
}

module.exports = AthleteController;
