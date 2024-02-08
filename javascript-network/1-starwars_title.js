#!/usr/bin/node
// this program fetches the star war api title

const request = require('request')

const id = process.argv[2]

const endpoint = 'https://swapi-api.alx-tools.com/api/films/'+id

request(endpoint, function(error, response, body) {
    const ObjectCharacter = JSON.parse(body)
    console.log(ObjectCharacter.title)
})
