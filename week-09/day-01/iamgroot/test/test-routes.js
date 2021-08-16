'use strict';

const chai = require('chai')
const request = require('supertest');
const app = require('../routes');

let expect = chai.expect

describe('groot endpoint with message and HTTP 200', () => {
    it('it should return a message', done => {
        request(app)
            .get('/groot?message=${message}')
            .expect(200)
            .end(function (err, res) {
                done()
                if (err) throw err
            })
    })

    it('should return HTTP 404 when no data is given', done => {
        request(app)
            .get('/yondu')
            .expect(404)
            .end(function (err, res) {
                done()
                if (err) throw err
            })
    })
})