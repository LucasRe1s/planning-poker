//const Game = require('../model/Game');
const { v4: uuidv4, v4 } = require('uuid');

// Created an array to simulate the database for testing.
const database = [];

//Fixed URL
const urlGame = 'localhost:3000/games'

function createGame (req, res) {
    // generated id
    let uniqueId = uuidv4();
    //format url
    const urlPlay = `${urlGame}/${uniqueId}`
    
    // created new game
    const newGame = {
        id: uniqueId,
        name : req.body.name,
        url: urlPlay,
    }
    // entering data
    database.push(newGame);
    res.status(201).json(newGame);
    console.log(newGame)
}

function getGames(req, res){
    res.status(200).json(database)
    console.log(database)
}

module.exports = {createGame, getGames};