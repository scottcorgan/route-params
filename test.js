'use strict'

let test = require('tape')
let routeParams = require('./index')

test('parses params', t => {

  let params = routeParams('/test/:id', '/test/123')
  let noParams = routeParams('/test/:id', '/no/123')

  t.deepEqual(params, {id: '123'}, 'parsed id from params')
  t.equal(noParams, undefined, 'returns nothing if nothing matches')
  t.end()
})
