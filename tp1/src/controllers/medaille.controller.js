'use strict';

const fs = require('fs');


class MedailleController{
    async getTotalMedaille(req, res) {
        let rawdata = fs.readFileSync('D:/IPI_LYON/CPIL - M2/Chatbot&IA/NodeJs/TP/tp1/src/public/data.json');
        let data = JSON.parse(rawdata);
        const nbMedal = await data.length;
        return nbMedal;
    }
    async getMedailleByCountry(req, res, country) {
        let rawdata = fs.readFileSync('D:/IPI_LYON/CPIL - M2/Chatbot&IA/NodeJs/TP/tp1/src/public/data.json');
        let data = JSON.parse(rawdata);
        let nbMedaillePays = 0;
        for(var i=0; i<data.length;i++){
            if(data[i].pays == country){
                nbMedaillePays++;
            }
        }
        return nbMedaillePays;
    }
    async getMedailleByRang(req, res, rang) {
        //console.log(rang);
        let rawdata = fs.readFileSync('D:/IPI_LYON/CPIL - M2/Chatbot&IA/NodeJs/TP/tp1/src/public/data.json');
        let data = JSON.parse(rawdata);
        let nbMedailleRang = 0;
        for(var i=0; i<data.length;i++){
            if(data[i].medal == rang){
                nbMedailleRang++;
            }
        }
        return nbMedailleRang;
    }

}
module.exports = MedailleController;