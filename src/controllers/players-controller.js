const playersService = require('../services/players-services');

async function addPlayer(req, res) {
  try {
    const gameId = req.params.id;
    const game = await playersService.addPlayer({ gameId, ...req.body })
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ messageError: error.message });
  }
}

async function vote(req, res) {
  try {
    const gameId = req.params.id;
    const playerId = req.params.player_id;
    const game = await playersService.vote({ gameId, playerId, ...req.body })
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ messageError: error.message });
  }
}

module.exports = {
  addPlayer,
  vote
};