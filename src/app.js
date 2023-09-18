const express = require('express');
const bodyParser = require('body-parser');
const gamesRepository = require('./repositories/games-repository');

const gamesRouter = require('./routes/games-router');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(gamesRouter);

const port = process.env.PORT || 3000;
const databaseFile = process.env.DATABASE;

app.listen(port, () => {
    console.log('Server api running at port', port);
    gamesRepository.startDatabase(databaseFile)
});

module.exports = app;