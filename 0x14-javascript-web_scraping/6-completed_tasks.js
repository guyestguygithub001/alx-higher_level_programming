#!/usr/bin/node

// Import the 'request' module
const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Send a request to the provided URL
request(url, function (err, response, body) {
  // If there's an error, log it
  if (err) {
    console.log(err);
  } 
  // If the response status code is 200 (OK), process the response body
  else if (response.statusCode === 200) {
    // Initialize an object to hold the count of completed tasks per user
    const completed = {};

    // Parse the response body into a JSON object
    const tasks = JSON.parse(body);

    // Iterate over each task in the tasks object
    for (const i in tasks) {
      const task = tasks[i];

      // If the task is completed
      if (task.completed === true) {
        // If the user hasn't been added to the completed object yet, add them with a count of 1
        if (completed[task.userId] === undefined) {
          completed[task.userId] = 1;
        } 
        // If the user is already in the completed object, increment their count
        else {
          completed[task.userId]++;
        }
      }
    }

    // Log the completed tasks count per user
    console.log(completed);
  } 
  // If the response status code is anything other than 200, log an error message with the status code
  else {
    console.log('An error occured. Status code: ' + response.statusCode);
  }
});
