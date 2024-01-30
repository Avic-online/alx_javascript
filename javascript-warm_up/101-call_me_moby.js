#!/usr/bin/node
// a program that displays x times a function

// const callMeMoby = require('./101-call_me_moby').callMeMoby;
// callMeMoby(3, function () {
//   console.log('C is fun');
// });

exports.callMeMoby = function (x, MobyCall) {
for (
    let count = 0;
    count < x;
    count += 1
    )
    MobyCall()
}

// const add = require('./13-add').add;