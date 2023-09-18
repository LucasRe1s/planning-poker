const fs = require('fs');
const games = require('../../database/db.json');

let _jsonPath = '';

const _writeDB = () => {
  let data = JSON.stringify(games);
  fs.writeFileSync(_jsonPath, data);
}

const get = () => [].concat(games);

const getById = (gameId) => games.find(game => game.id === gameId);

const save = (game) => {
  games.push(game);

  _writeDB();

  return game;
}

const update = (gameId, game) => {
  const i = games.findIndex(game => gameId);
  games[i] = game;

  _writeDB();

  return game;
}

const startDatabase = (jsonPath) => {
  _jsonPath = jsonPath;
  //let rawdata = fs.readFileSync(jsonPath);
  //games.push(...JSON.parse(rawdata));
  console.log("database running");
}

module.exports = {
  get,
  getById,
  save,
  update,
  startDatabase
}