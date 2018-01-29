"use strict"

const Hapi = require('hapi')
const server = new Hapi.Server()
const Joi = require('joi')

server.connection({ port: 3000 })

server.route({
  method: 'GET',
  path: '/{yourname}',
  config: {
    validate: {
      params: {
        yourname: Joi.string().min(2).max(10).alphanum().required()
      }
    },
    handler: (request, reply) => {
      reply(`Hello, ${request.params.yourname} !`)
    }
  }
})

server.start(() => {
  console.log('Server starts at port 3000 ...')
})

module.exports = server
