const { v4: uuidv4, v4 } = require('uuid');

const urlBaseGame = 'localhost:3000/games'
const database = [];
const NAME_MAX_LENGHT = 60;

function _validateName(name) {
  if (!name) return

  if (name.length > NAME_MAX_LENGHT) throw Error('Max lenght 60')
}

function createGame({ name }) {

  const _name = (name || '').trim()
  const id = uuidv4();

  _validateName(_name);

  const urlGame = `${urlBaseGame}/${id}`

  const game = {
    id,
    name: _name,
    url: urlGame,
  }

  database.push(game);

  return game;
}

function getGames() {
  return database;
}

module.exports = {
  createGame,
  getGames
}
