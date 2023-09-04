const gamesService = require('../services/games-service')

async function createGame(req, res) {
  try {
    const name = req.body.name;
    const gameCreated = gamesService.createGame({ name })
    res.status(201).json(gameCreated);
  } catch (error) {
    res.status(500).json({ messageError: error.message });
  }
}

async function getGames(req, res) {
  try {
    const games = gamesService.getGames()
    res.status(200).json(games)
  } catch (error) {
    res.status(500).json({ messageError: error.message })
  }
}

async function getGameById(req, res) {
  try {
    const gameId = req.params.id;
    const game = await gamesService.getGameById(gameId)
    res.status(200).json(game)
  } catch (error) {
    res.status(500).json({ messageError: error.message })
  }
}

module.exports = {
  createGame,
  getGames,
  getGameById
};