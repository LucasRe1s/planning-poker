const express = require('express');
const cors = require('cors');
const { createServer } = require("http");
const { Server } = require("socket.io");
require('dotenv').config();

const port = process.env.PORT || 3000;

const gamesRouter = require('./routes/games-router');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(gamesRouter);

const httpServer = createServer(app);

httpServer.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

const io = new Server(httpServer, { cors: {} });

module.exports = io;