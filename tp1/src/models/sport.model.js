'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new mongoose.Schema({
    name: String,
    athletes: [{ type: Schema.Types.ObjectId, ref: 'athletes' }]
});

const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;
