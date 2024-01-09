#!/usr/bin/node
// Export the function using module.exports
exports.nbOccurences = function (list, searchElement) {
  // Declare a variable to store the count
  let count = 0;
  // Loop through the list
  for (let element of list) {
    // Compare each element with the searchElement
    if (element === searchElement) {
      // Increment the count if they are equal
      count++;
    }
  }
  // Return the count
  return count;
};

