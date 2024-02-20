#!/usr/bin/node
// This line indicates that the script should be executed with Node.js.

const request = require('request');
// Importing the 'request' module for making HTTP requests.

const movieId = process.argv[2];
// Retrieving the movie ID from the command line arguments.

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;
// Constructing the API URL using the movie ID.

// Making an HTTP GET request to the Star Wars API.
request(apiUrl, function (error, response, body) {
  // If the request was successful...
  if (!error && response.statusCode === 200) {
    // Parsing the JSON response body.
    const movieData = JSON.parse(body);

    // Creating an array of promises to fetch data for each character.
    const characterPromises = movieData.characters.map((characterUrl) => {
      // Returning a new promise for each character.
      return new Promise((resolve, reject) => {
        // Making a request to fetch the data for the individual character.
        request(characterUrl, function (charError, charResponse, charBody) {
          // If the request was successful...
          if (!charError && charResponse.statusCode === 200) {
            // Parsing the JSON response body.
            const characterData = JSON.parse(charBody);
            // Resolving the promise with the name of the character.
            resolve(characterData.name);
          } else {
            // If there was an error, rejecting the promise with the error message.
            reject(new Error(`Error fetching character data: ${charError}`));
          }
        });
      });
    });

    // Waiting for all character promises to resolve.
    Promise.all(characterPromises)
      .then((characterNames) => {
        // Logging the names of all characters.
        console.log(characterNames.join('\n'));
      })
      .catch((error) => {
        // Logging any errors that occurred.
        console.error(error.message);
      });
  } else {
    // If there was an error with the movie request, logging the error.
    console.error('Error fetching movie data:', error);
  }
});

