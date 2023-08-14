const express = require('express');
const bodyParser = require('body-parser');

const gamesRouter = require('./routes/games-router')
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(gamesRouter)


const port = process.env.PORT;

app.listen(port, () => {
    console.log('Rodando na porta', port);
});

module.exports = app;