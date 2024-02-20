#!/usr/bin/node
// Import the 'fs' module
const fs = require('fs');

// Read the file specified by the command line argument
// The 'utf8' argument specifies the encoding to be used
// The callback function is executed once the file has been read
fs.readFile(process.argv[2], 'utf8', function (error, content) {
  // If there's an error, it will be logged; otherwise, the content of the file will be logged
  console.log(error || content);
});
