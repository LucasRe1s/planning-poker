const express = require('express');

const gamesController = require('../controllers/games-controller');

const router = express.Router();

router.post('/games', gamesController.createGame);
router.get('/games', gamesController.getGames);

router.post('/games/:id/player', gamesController.createPlayers);

router.get('/games/:id', gamesController.getId);


module.exports = router;
