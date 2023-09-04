const express = require('express');

const gamesController = require('../controllers/games-controller');

const router = express.Router();

router.post('/games', gamesController.createGame);
router.get('/games', gamesController.getGames);

router.post('/games/:id/players', gamesController.createPlayers);

router.get('/games/:id', gamesController.getGameById);


module.exports = router;
