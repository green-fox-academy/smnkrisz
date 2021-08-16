'use strict';

const chai = require('chai')
const request = require('supertest');
const app = require('../routes');

let expect = chai.expect

describe('yondu endpoint with data', () => {
    it('it should return a data', done => {
        const distance = 100.0
        const time = 10.0
        const speed = distance / time
        request(app)
            .get(`/yondu?distance=${distance}&time=${time}`)
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