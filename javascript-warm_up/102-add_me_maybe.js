#!/usr/bin/node
// a function that increments and calls a function

exports.addMeMaybe = function (number, theAdd) {
    theAdd(++number);
}

// const addMeMaybe = require('./102-add_me_maybe').addMeMaybe;
// addMeMaybe(4, function (nb) {
//   console.log('New value: ' + nb);
// });