const express = require('express');

const server = express();

server.games = [
  {
    title: 'Pacman',
    genre: 'Arcade',
    releaseYear: 1980
  },
  {
    title: 'Final Fantasy VII',
    genre: 'JRPG',
    releaseYear: 1997
  },
  {
    title: 'Callof Duty',
    genre: 'FPS',
    releaseYear: 2003
  },
  {
    title: 'Grand Theft Auto V',
    genre: 'Action-Adventure',
    releaseYear: 2013
  }
]

server.initialGames = server.games.slice();

server.resetGames = () => {
  server.games = server.initialGames;
}

server.clearGames = () => {
  server.games = [];
}

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: `IT'S ALIVE!` });
})

server.post('/games', async (req, res) => {
  try {
    let game = req.body;

    if (game.title && game.genre) {
      server.games.push(game);
      return res.status(201).send();
    }

    return res.status(422).json({ message: 'Error, incomplete data' });
  } catch(err) {
    return res.status(500).json({ error: err });
  }
})

server.get('/games', async (req, res) => {
  try {
    res.status(200).json(server.games);
  } catch(err) {
    res.status(500).json({ error: err });
  }
})

module.exports = server;
