const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/OlympicGames';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function() {
    console.log('Connected to the database! ✅');
});
