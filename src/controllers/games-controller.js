const gamesService = require('../services/games-service')
const playersService = require('../services/create-players');
const database = require('../data/database');

let gamesList = [];

function createGame(req, res) {
  try {
    const name = req.body.name;
    const gameCreated = gamesService.createGame({ name })
    res.status(201).json(gameCreated);
  } catch (error) {
    res.status(500).json({ messageError: error.message });
  }
}



function getGames(req, res) {
  try {
    gamesList = gamesService.getGames()
    res.status(200).json(gamesList)
  } catch (error) {
    res.status(500).json({ messageError: error.message })
  }
}

function createPlayers(req, res) {

  try {
    const gameId = req.params.id;
    const name = req.body.name;
    const gameCreated = playersService.createPlayers({ name, gameId })
    console.log("name " + name)
    console.log('game id: ' + gameId)
    res.status(201).json(gameCreated);
    const games = gamesService.createGame(gameId);








  } catch (error) {
    res.status(500).json({ messageError: error.message });

  }



}




async function getGameById(req, res) {


  const games = gamesService.getGames()
  const gameId = req.params.id;
  
  for(let i = 0; i < games.length; i++){
    if (gameId === games[i].id) {
      let game = games[i]
     
      console.log(game)
      
      return res.json({game})
      
    }
    
  }

}



module.exports = { createGame, getGames, createPlayers, getGameById };