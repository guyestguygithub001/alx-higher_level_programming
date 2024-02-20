#!/usr/bin/node
// This line is a shebang that tells the system this script is a Node.js script.

const request = require('request');
// This line imports the 'request' module which is used to make HTTP requests.

const movieId = process.argv[2];
// This line gets the third command line argument (the first being 'node', the second being the script name), which is the ID of the movie.

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;
// This line constructs the URL to fetch the movie data from the SWAPI (Star Wars API).

request(apiUrl, function (error, response, body) {
// This line sends a request to the SWAPI to get the movie data.

  if (!error && response.statusCode === 200) {
    // This line checks if the request was successful.

    const movieData = JSON.parse(body);
    // This line parses the JSON response body into a JavaScript object.

    console.log(`Characters of "${movieData.title}":`);
    // This line logs the title of the movie.

    movieData.characters.forEach((characterUrl) => {
      // This line starts a loop over each character URL in the movie data.

      request(characterUrl, function (charError, charResponse, charBody) {
        // This line sends a request to the SWAPI to get the character data.

        if (!charError && charResponse.statusCode === 200) {
          // This line checks if the request was successful.

          const characterData = JSON.parse(charBody);
          // This line parses the JSON response body into a JavaScript object.

          console.log(characterData.name);
          // This line logs the name of the character.

        } else {
          console.error('Error fetching character data:', charError);
          // This line logs an error message if there was an error fetching the character data.
        }
      });
    });
  } else {
    console.error('Error fetching movie data:', error);
    // This line logs an error message if there was an error fetching the movie data.
  }
});

