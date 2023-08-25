const gamesService = require('../services/games-service')
const playersService = require('../services/create-players')

function createGame(req, res) {
    try {
        const name = req.body.name;
        const gameCreated = gamesService.createGame({ name })
        res.status(201).json(gameCreated);
    } catch (error) {
        res.status(500).json({ messageError: error.message });
    }
}

function getGames(req, res) {
    const games = gamesService.getGames()
    res.status(200).json(games)
}

function createPlayers(req, res) {

    try {
        const idUrl = req.params.id;
        console.log('id url: ' + idUrl)

        const name = req.body.name;
        const playerCreated = playersService.createPlayers({ name, idUrl })
        res.status(201).json(playerCreated);

    } catch (error) {
        res.status(500).json({ messageError: error.message });
    }
}

function getId(req, res) {



}


module.exports = { createGame, getGames, createPlayers, getId };

