const express = require('express');

const gamesController = require('../controllers/games-controller');

const router = express.Router();

router.post('/games', gamesController.createGame);
router.get('/games', gamesController.getGames);
router.post('/games/:id/player', gamesController.createPlayers);

router.post('/games/:id', gamesController.getId);

module.exports = router;
