const { v4: uuidv4, v4 } = require('uuid');
const gamesService = require('./games-service')
const gamesController = require('../controllers/games-controller')
const database = require('../data/database')

const urlBaseGame = 'localhost:3000/games'
const NAME_MAX_LENGHT = 15;

function _validateName(name) {
    if (!name) throw Error('Name required')

    if (name.length > NAME_MAX_LENGHT) throw Error('Max lenght 15')
}


function _validateGame(gameId) {

    const games = gamesService.getGames()

    for (let i = 0; i < games.length; i++) {
        if (gameId === games[i].id) {
            let game = games[i]

            console.log(game)
            return res.json({ game })

        }

    }
}

function createPlayers({ name, gameId }) {

    const player_id = uuidv4();

    const _name = name;
    _validateName(_name);

    // _validateGame(gameId)

    const urlGame = `${urlBaseGame}/${gameId}/${_name}`






    const player = [
        {
            player_id,
            name: _name,
            vote: null,
            url: urlGame
    
      
        }
    ]

    database.push(player)

    return player;
}




module.exports = { createPlayers }