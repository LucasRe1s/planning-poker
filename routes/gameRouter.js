const express = require('express');

const gameController = require('../controller/gameController');

const router = express.Router();

router.post('/games', gameController.createGame);
router.get('/games', gameController.getGames);

module.exports = router;
