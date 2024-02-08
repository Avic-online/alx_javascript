#!/usr/bin/node
// javascript program to get status code of a url request


const request = require('request')
const url = 'https://developer.mozilla.org/en-US/'
request.get(url, function(error, response, body) {
    console.log('code:', response.statusCode)
})
