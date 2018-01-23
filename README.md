# ASYNC_JSON
Promisified JSON.parse and JSON.stringify for non blocking parsing of json using napa.js
## Installation
Install the latest stable version:
```
npm i @samuel023/async_json
```
## Quick Start
```js
//promisified/async JSON.stringify
const AsyncJSON = require('@samuel023/async_json');

const {stringifyAsync} = AsyncJSON();

const obj = {name:"john",lastname:"doe"}
stringifyAsync(obj).then( result => { 
    console.log(result); //{"name":"john","lastname":"doe"} 
 });

console.log(await stringifyAsync(obj));//{"name":"john","lastname":"doe"} 
 
```

```js
//promisified/async JSON.parse
const AsyncJSON = require('@samuel023/async_json');

const {parseAsync} = AsyncJSON();

const jsonstr = `{"name":"john","lastname":"doe"}`
parseAsync(jsonstr).then( result => { 
    console.log(result); //{ name: 'john', lastname: 'doe' }
 });

console.log(await parseAsync(jsonstr));//{ name: 'john', lastname: 'doe' } 
 
```
