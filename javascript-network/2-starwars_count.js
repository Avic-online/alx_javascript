#!/usr/bin/node
// this program fetches the star war api number of films

const request = require('request')

const id = process.argv[2]

const endpoint = 'https://swapi-api.alx-tools.com/api/films'

request(endpoint, function(error, response, body) {
    if (!error) {
        const results = JSON.parse(body).results
        console.log(results.reduce((count, movie) => {
            return movie.characters.find((character) => character.endsWith('/18/'))
                ? count + 1
                :count
        }, 0))
    }
    // const ObjectCharacter = JSON.parse(body)
    // console.log(ObjectCharacter.title)
})