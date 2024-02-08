#!/usr/bin/node
// this program fetches and store the content of a web page

const fs = require('fs')
const request = require('request')
request(process.argv[2])
  .pipe(fs.createWriteStream(process.argv[3]))