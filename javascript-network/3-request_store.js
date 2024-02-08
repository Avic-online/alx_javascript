#!/usr/bin/node
// this program fetches and store the content of a web page

const fs = require('fs');
const request = require('request');

if (process.argv.length !== 4) {
    console.error('Usage: node script.js <URL> <FilePath>');
    process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make a request to the specified URL
request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Failed to retrieve the content. Status Code:', response.statusCode);
        process.exit(1);
    }

    // Write the body content to the specified file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            process.exit(1);
        }

        console.log('Content successfully saved to', filePath);
    });
});
