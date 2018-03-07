#mypluralizer

A Node.js module that returns the plural form of any noun

Little app created to learn how to build node modules with typescript based in article on https://codeburst.io/https-chidume-nnamdi-com-npm-module-in-typescript-12b3b22f0724

## Installation 
```sh
npm install mypluralize --save
yarn add mypluralize
bower install pluralize --save
```

## Usage

### Javascript

```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```

### TypeScript
```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```

### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```

## Test 
```sh
npm run test
```