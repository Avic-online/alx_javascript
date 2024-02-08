#!/usr/bin/node
// this program fetches and store the content of a web page

const saveFile = require('saveFile')
const request = require('request')
request(process.argv[2])
  .pipe(saveFile.createWriteStream(process.argv[3]))