#!/usr/bin/node
// this program computes all characters of the star wars movie

const request = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node script.js <MovieID>');
    process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Failed to retrieve movie data. Status Code:', response.statusCode);
        process.exit(1);
    }

    const movie = JSON.parse(body);

    // lets display characters here by their name
    console.log(`Characters in ${movie.title}:`);
    movie.characters.forEach((characterUrl) => {
        request(characterUrl, (characterError, characterResponse, characterBody) => {
            if (characterError) {
                console.error('Error:', characterError);
            } else {
                const character = JSON.parse(characterBody);
                console.log(character.name);
            }
        });
    });
});