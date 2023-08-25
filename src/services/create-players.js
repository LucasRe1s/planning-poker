const { v4: uuidv4, v4 } = require('uuid');
const gamesService = require('./games-service')
const gamesController = require('../controllers/games-controller')
const database = require('../data/database')

const urlBaseGame = 'localhost:3000/games'
const NAME_MAX_LENGHT = 60;

function _validateName(name) {
    if (!name) throw Error('Name required')
  
    if (name.length > NAME_MAX_LENGHT) throw Error('Max lenght 60')
}

function _validateGame(urlGame){
    
    const game = gamesService.createGame(urlGame);
    
    if(urlGame === game.id){
        return game;
    }
    
}

function createPlayers ({name, idUrl}) {

    const player_id = uuidv4();
    const _name = (name || '').trim();
    _validateName(_name);
    const urlGame = `${urlBaseGame}/${idUrl}/${_name}`
    
    const player = {
        player_id,
        name: _name,
        vote: null,
        url: urlGame
    }
    
}



function getId () {
    return database.id;
}

module.exports = {
    createPlayers, getId
}