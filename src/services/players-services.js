const { v4: uuidv4, v4 } = require('uuid');
const gamesService = require('./games-service')
const gamesController = require('../controllers/games-controller')
const database = require('../data/database')

const NAME_MAX_LENGHT = 15;

function _validateName(name) {
    if (!name) throw Error('Name required')

    if (name.length > NAME_MAX_LENGHT) throw Error(`Max lenght ${NAME_MAX_LENGHT}`)
}

function addPlayer({ gameId, name }) {
    const playerId = uuidv4();

    const _name = name;
    _validateName(_name);

    const game = gamesService.getGameById(gameId);
    if (!game) throw Error(`Game not found. ${gameId}`);

    const player = {
        player_id: playerId,
        name: _name,
        vote: null
    };

    game.players.push(player);

    return game;
}


function playerVote({ gameId, playerId, vote }) {
    const game = gamesService.getGameById(gameId);
    if (!game) throw Error(`Game not found. ${gameId}`);

    const player = game.players.find(({ player_id }) => player_id === playerId);

    player.vote = vote;

    return game;
}

module.exports = { addPlayer, playerVote }