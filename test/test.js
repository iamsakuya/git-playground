"use strict"

const Lab = require('lab')
const lab = exports.lab = Lab.script()
const assert = require('chai').assert

const server = require('../src/hellovalidate')

lab.experiment('Hapi test with lab.js', () => {
  lab.test('GET /{yourname} endpoint test', (done) => {
    const options = {
      method: 'GET',
      url: '/Chong'
    }
    server.inject(options, (response) => {
      assert.strictEqual(200, response.statusCode, 'status code should be 200')
      assert.strictEqual('Hello, Chong !', response.payload, 'result body should be Hello Chong !')
      server.stop(done)
    })
  })
})