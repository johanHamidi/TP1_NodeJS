'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new mongoose.Schema({
    name: String,
    athletes: [{ type: Schema.Types.ObjectId, ref: 'Athlete' }]
});


const athleteSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    country: String

});

const Sport = mongoose.model('Sport', sportSchema);
const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Sport;
