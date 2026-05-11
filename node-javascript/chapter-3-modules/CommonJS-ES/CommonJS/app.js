const math = require('./math');
// require() imports code from another file
// this means to go find the file math.js in the current folder and load whatever it exports
// Whatever math.js exports becomes stored in the const variable math

console.log(math.add(5,3));
// calls the add() function from math.js