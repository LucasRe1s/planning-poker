const gamesService = require('../services/games-service')

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

module.exports = { createGame, getGames };