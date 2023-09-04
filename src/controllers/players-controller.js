const playersService = require('../services/players-services');

async function addPlayer(req, res) {
  try {
    const gameId = req.params.id;
    const playerName = req.body.name;
    const game = await playersService.addPlayer({ gameId, name: playerName })
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ messageError: error.message });
  }
}

async function vote(req, res) {
  try {
    const gameId = req.params.id;
    const playerId = req.params.player_id;
    const vote = req.body.vote;
    const game = await playersService.vote({ gameId, playerId, vote })
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ messageError: error.message });
  }
}

module.exports = {
  addPlayer,
  vote
};