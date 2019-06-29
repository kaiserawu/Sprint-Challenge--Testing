const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  afterEach(() => {
    server.resetGames();
  })

  describe('POST /games', () => {
    it('should return a 201 status code on correct post', async () => {
      const res = await request(server).post('/games').send({ name: 'Pong', genre: 'arcade' });
      expect(res.status).toBe(201);
    })

    it('should return a 422 status code on incomplete info', async () => {
      const res = await request(server).post('/games').send({ name: 'Pong' });
      expect(res.status).toBe(422);
    })

    it('should correctly save data once POSTed', async () => {
      await request(server).post('/games').send({ name: 'Pong', genre: 'arcade' });
      expect(server.games[server.games.length - 1]).toEqual({ name: 'Pong', genre: 'arcade' });
    })
  })

  describe('GET /games', () => {
    it('should return a 200 status code', () => {

    })

    it('should return the correct JSON', () => {

    })

    it('should return an empty array if no games', () => {

    })
  })
  
});