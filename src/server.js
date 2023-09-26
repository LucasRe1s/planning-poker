const io = require('./app');
const { getGameById } = require('./services/games-service');
const { playerVote } = require('./services/players-services');

io.on('connection', (socket) => {
  console.log('client connected by id', socket.id);

  socket.on('enter-game-board', async (gameId, returnGame) => {
    socket.join(gameId);

    const game = await getGameById(gameId);

    socket.to(gameId).emit('update-game', game);

    if (typeof returnGame === 'function') returnGame(game);
  });

  socket.on('player-vote', async ({ gameId, playerId, vote }, returnGame) => {
    if (!gameId) return;

    console.log('gameID', gameId);
    const game = await playerVote({ gameId, playerId, vote })

    socket.to(gameId).emit('update-game', game, !!vote);

    if (typeof returnGame === 'function') returnGame(game);
  })
})
