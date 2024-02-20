#!/usr/bin/node
// This line is a shebang that tells the system this script is a Node.js script.

const request = require('request');
// This line imports the 'request' module which is used to make HTTP requests.

const apiUrl = process.argv[2];
// This line gets the third command line argument (the first being 'node', the second being the script name), which is the URL of the API.

request(apiUrl, function (error, response, body) {
// This line sends a request to the API.

  if (!error && response.statusCode === 200) {
    // This line checks if the request was successful.

    try {
      const todos = JSON.parse(body);
      // This line parses the JSON response body into a JavaScript object.

      const completed = {};
      // This line initializes an empty object to store the count of completed tasks for each user.

      todos.forEach((todo) => {
        // This line starts a loop over each todo item in the todos array.

        if (todo.completed) {
          // This line checks if the todo item is completed.

          if (completed[todo.userId] === undefined) {
            completed[todo.userId] = 1;
            // If this is the first completed task for this user, initialize the count to 1.
          } else {
            completed[todo.userId]++;
            // If this user has completed tasks before, increment the count.
          }
        }
      });

      const output = `{${Object.entries(completed).map(([key, value]) => ` '${key}': ${value}`).join(',\n ')} }`;
      // This line constructs a string representation of the completed object, with each key-value pair on a new line.

      console.log(Object.keys(completed).length > 2 ? output : completed);
      // This line logs the completed object. If there are more than two users, it logs the string representation; otherwise, it logs the object itself.

    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      // This line logs an error message if there was an error parsing the JSON response body.
    }
  } else {
    console.error('Error:', error);
    // This line logs an error message if there was an error making the request.
  }
});
