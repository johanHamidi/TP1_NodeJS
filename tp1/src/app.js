const express = require('express');

const bodyParser= require('body-parser')


const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

// Ajouter les routes via les routers
const sportRouter = require('./routers/sport.router');
app.use('/api/sports', sportRouter);

const athleteRouter = require('./routers/athlete.router');
app.use('/api/athletes', athleteRouter);

const medailleRouter = require('./routers/medaille.router');
app.use('/api/webhooks', medailleRouter);

app.get('/', (req, res) => {
    res.render('index', { name: 'OlympicGames' });
});

app.get('/index', (req, res) => {
    res.render('index', { name: 'OlympicGames' });
});

// Connexion à la base de données
require('./database/mongodb');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port} 🚀`);
});

app.set('view engine', 'hbs');
// on indique que nos vues se trouverons toujours dans le dossier views 
app.set('views', path.join(__dirname, 'views'));
