#!/usr/bin/node
// Use the class keyword to declare a class
class Rectangle {
  // Use the constructor method to define the class properties
  constructor(w, h) {
    // Check if w and h are positive integers
    if (w > 0 && h > 0) {
      // Initialize the instance attribute width with the value of w
      this.width = w;
      // Initialize the instance attribute height with the value of h
      this.height = h;
    } else {
      // Create an empty object
      return {};
    }
  }
}

module.exports = Rectangle;

