
const { v4: uuidv4, v4 } = require('uuid');
const gamesRepository = require('../repositories/games-repository')

const urlBaseGame = 'localhost:3000/games'
const NAME_MAX_LENGHT = 60;

function _validateName(name) {
  if (!name) return

  if (name.length > NAME_MAX_LENGHT) throw Error('Max lenght 60')
}

function createGame({ name }) {

  const _name = (name || '').trim();
  _validateName(_name);

  const id = uuidv4();
  const urlGame = `${urlBaseGame}/${id}`

  const game = {
    id,
    name: _name,
    url: urlGame,
    players: []
  }

  return gamesRepository.save(game);
}

function getGames() {
  return gamesRepository.get();
}

function getGameById(gameId) {
  return gamesRepository.getById(gameId);
}

module.exports = {
  createGame,
  getGames,
  getGameById
}

