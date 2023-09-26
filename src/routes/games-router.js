const express = require('express');

const gamesController = require('../controllers/games-controller');
const playersController = require('../controllers/players-controller');

const router = express.Router();

router.post('/games', gamesController.createGame);
router.get('/games', gamesController.getGames);
router.get('/games/:id', gamesController.getGameById);
router.post('/games/:id/players', playersController.addPlayer);
router.patch('/games/:id/players/:player_id/vote', playersController.playerVote);

module.exports = router;
