#!/usr/bin/node

const fs = require('fs');
// Import built-in Node.js 'fs' module,

fs.writeFile(process.argv[2], process.argv[3], 'utf8', error => {
  // Use fs.writeFile() to write data to file specified as third command-line argument (process.argv[2]),
  // data to be written is taken from fourth command-line argument (process.argv[3]),

  if (error) {
    // If an error occurs during write operation, 'error' parameter will contain an error object,
    console.error(error);
  }
});

