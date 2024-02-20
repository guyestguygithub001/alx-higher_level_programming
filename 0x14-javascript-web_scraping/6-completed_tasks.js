#!/usr/bin/node

// Import the 'request' module
const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Make a request to the specified URL
request(url, function (err, response, body) {
  // If there's an error, log it
  if (err) {
    console.log(err);
  } 
  // If the response status code is 200 (OK), process the response
  else if (response.statusCode === 200) {
    // Initialize an object to store the completed tasks
    const completed = {};

    // Parse the body of the response into a JavaScript object
    const tasks = JSON.parse(body);

    // Iterate over each task
    for (const i in tasks) {
      const task = tasks[i];

      // If the task is completed
      if (task.completed === true) {
        // If this is the first completed task for this user, initialize their count to 1
        if (completed[task.userId] === undefined) {
          completed[task.userId] = 1;
        } 
        // Otherwise, increment their count
        else {
          completed[task.userId]++;
        }
      }
    }

    // Log the completed task counts
    console.log(completed);
  } 
  // If the response status code is anything other than 200, log an error message
  else {
    console.log('An error occurred. Status code: ' + response.statusCode);
  }
});
