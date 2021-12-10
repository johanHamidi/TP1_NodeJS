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
}

module.exports = SportController;
