"use strict"

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 3000 })

server.app.name = 'happi app'

const handler = (request, reply) => {
  console.log(request.query.name)
  console.log(request.query.age)
  const keys = Object.keys(request.query)
  console.log(keys)
  return reply(keys)
}

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: handler
  }
})

server.start(() => {
  console.log(`Server starts at port ${server.info.port} ...`)
})