#!/usr/bin/node

// Importing the 'request' module
const request = require('request');

// Getting the API URL from the command line arguments
const apiUrl = process.argv[2];

// Making a request to the API
request(apiUrl, function (error, response, body) {
  // Checking if there is no error and the status code is 200 (OK)
  if (!error && response.statusCode === 200) {
    try {
      // Parsing the body of the response to a JSON object
      const todos = JSON.parse(body);

      // Creating an object to store the completed tasks count for each user
      const completed = {};

      // Iterating over each todo item
      todos.forEach((todo) => {
        // Checking if the todo item is completed
        if (todo.completed) {
          // If the user has not been added to the completed object, add them with a count of 1
          // Otherwise, increment the count of completed tasks for the user
          if (completed[todo.userId] === undefined) {
            completed[todo.userId] = 1;
          } else {
            completed[todo.userId]++;
          }
        }
      });

      // Formatting the completed object to a string for output
      const output = `{${Object.entries(completed).map(([key, value]) => ` '${key}': ${value}`).join(',\n ')} }`;

      // If there are more than 2 users, output the formatted string, otherwise output the completed object
      console.log(Object.keys(completed).length > 2 ? output : completed);
    } catch (parseError) {
      // If there is an error parsing the JSON, log the error
      console.error('Error parsing JSON:', parseError);
    }
  } else {
    // If there is an error with the request, log the error
    console.error('Error:', error);
  }
});
