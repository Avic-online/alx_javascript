#!/usr/bin/node
// javascript program to get status code of a url request


// const request = require('request');
// const url = 'https://swapi-api.alx-tools.com/api/films/2';
// request.get(url, function(error, response, body) {
//     // const urlObject = JSON.parse(response)
//     console.log('code:', response.statusCode)
// });

const request = require('request')
request.get(process.argv[2])
  .on('response', function(response) {
    console.log('code:', response.statusCode)
  })