
const { v4: uuidv4, v4 } = require('uuid');
const database = require('../data/database')

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

  database.push(game);

  return game;
}

function getGames() {
  return database;
}

function getGameById(gameId) {
  return database.find((game) => game.id === gameId);
}

module.exports = {
  createGame,
  getGames,
  getGameById
}

