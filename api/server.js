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

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: `IT'S ALIVE!` });
})

module.exports = server;
