const express = require('express');
const bodyParser = require('body-parser');

const gameRouter = require('./routes/gameRouter')
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(gameRouter)


const port = process.env.PORT;
app.listen(port, () => {
    console.log('Rodando na porta', port);
});