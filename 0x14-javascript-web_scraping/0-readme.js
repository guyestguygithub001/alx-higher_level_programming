#!/usr/bin/node

const fs = require('fs');
// Import built-in Node.js 'fs' module,

fs.readFile(process.argv[2], 'utf8', function (error, content) {
  // Use fs.readFile() to read  contents of  file specified as a command-line arg,
  // 'utf8' specifies encoding of file being read,

  if (error) {
    // If error occurs during file read operation, the 'error' parameter will contain an error object,
    console.error('Error reading the file:', error);

  } else {
    // If file is read successfully, this 'content' parameter contain the contents of file as a string,
    console.log(content);
  }
});

