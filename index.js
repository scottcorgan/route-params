'use strict'

let pathnameMatch = require('pathname-match')
let pathToRegexp = require('path-to-regexp')
let memoize = require('mem')
let zipObject = require('zip-object')

module.exports = memoize((route, originalPath) => {

    let pathDetails = []
    let pathRegexp = pathToRegexp(route, pathDetails)
    let regexpResults = pathRegexp.exec(pathnameMatch(originalPath))
    let paramNames = pathDetails.map(detail => detail.name)

    return !!regexpResults
        ? zipObject(paramNames, regexpResults.slice(1))
        : undefined
})
