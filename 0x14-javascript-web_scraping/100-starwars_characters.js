#!/usr/bin/node
// Import the 'request' module for making HTTP requests
const request = require('request');

// Define a function that fetches and prints the characters of a Star Wars movie
function getCharacters(movieId) {
  // Construct the URL for the API request
  const url = `https://swapi.dev/api/films/${movieId}/`;

  // Make a request to the Star Wars API to get the data of the specified movie
  request(url, function (error, response, body) {
    // If the request was successful (no errors and status code 200), proceed
    if (!error && response.statusCode == 200) {
      // Parse the body of the response (which is in JSON format) to a JavaScript object
      const movie = JSON.parse(body);

      // For each character URL in the movie data, make another request to get the character's data
      movie.characters.forEach((characterUrl) => {
        request(characterUrl, function (error, response, body) {
          // If the request was successful, print the name of the character
          if (!error && response.statusCode == 200) {
            const character = JSON.parse(body);
            console.log(character.name);
          }
        });
      });
    }
  });
}

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Call the function with the specified movie ID
getCharacters(movieId);
