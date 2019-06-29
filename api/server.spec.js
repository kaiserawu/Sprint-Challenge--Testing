const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  afterEach(() => {
    server.resetGames();
  })

  describe('POST /games', () => {
    it('should return a 201 status code on correct post', () => {

    })

    it('should return a 422 status code on incomplete info', () => {

    })

    it('should correctly save data once POSTed', () => {

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