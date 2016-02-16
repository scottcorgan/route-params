# route-params

Get parameters from a route with segments

## Install

```
npm install route-params --save
```

## Usage

```js
let routeParams = require('route-params')

let params = routeParams('/test/:id', '/test/123')

console.log(params) // {id: '123'}
```

## Run Tests

```
npm test
```
