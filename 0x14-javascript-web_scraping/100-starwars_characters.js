#!/usr/bin/node

// Import the 'request' module
const req = require('request');

// Get the film ID from the command line arguments
const id = process.argv[2];

// Define the base URL for the Star Wars API
const url = 'https://swapi-api.hbtn.io/api/films/';

// Make a GET request to the Star Wars API for the specified film
req.get(url + id, function (error, res, body) {
  // If there's an error, log it
  if (error) {
    console.log(error);
  }

  // Parse the body of the response into a JavaScript object
  const data = JSON.parse(body);

  // Get the list of characters from the film data
  const dd = data.characters;

  // For each character in the list
  for (const i of dd) {
    // Make a GET request to the Star Wars API for the character's data
    req.get(i, function (error, res, body1) {
      // If there's an error, log it
      if (error) {
        console.log(error);
      }

      // Parse the body of the response into a JavaScript object
      const data1 = JSON.parse(body1);

      // Log the name of the character
      console.log(data1.name);
    });
  }
});
#!/usr/bin/node

// Import the 'request' module
const req = require('request');

// Get the film ID from the command line arguments
const id = process.argv[2];

// Define the base URL for the Star Wars API
const url = 'https://swapi-api.hbtn.io/api/films/';

// Make a GET request to the Star Wars API for the specified film
req.get(url + id, function (error, res, body) {
  // If there's an error, log it
  if (error) {
    console.log(error);
  }

  // Parse the body of the response into a JavaScript object
  const data = JSON.parse(body);

  // Get the list of characters from the film data
  const dd = data.characters;

  // For each character in the list
  for (const i of dd) {
    // Make a GET request to the Star Wars API for the character's data
    req.get(i, function (error, res, body1) {
      // If there's an error, log it
      if (error) {
        console.log(error);
      }

      // Parse the body of the response into a JavaScript object
      const data1 = JSON.parse(body1);

      // Log the name of the character
      console.log(data1.name);
    });
  }
});
