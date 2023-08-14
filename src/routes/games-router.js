const express = require('express');

const gamesController = require('../controllers/games-controller');

const router = express.Router();

router.post('/games', gamesController.createGame);
router.get('/games', gamesController.getGames);

module.exports = router;
