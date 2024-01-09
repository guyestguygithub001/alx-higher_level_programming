#!/usr/bin/node
class Rectangle {
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

  // Create an instance method called print() that prints the rectangle using the character X
  print() {
    // Use a loop to print each row of the rectangle
    for (let i = 0; i < this.height; i++) {
      // Use the repeat() method to create a string of X characters with the length of the width
      console.log('X'.repeat(this.width));
    }
  }

  // Create an instance method called rotate() that exchanges the width and the height of the rectangle
  rotate() {
    // Use a temporary variable to store the width
    let temp = this.width;
    // Assign the height to the width
    this.width = this.height;
    // Assign the temporary variable to the height
    this.height = temp;
  }

  double() {
    // Multiply the width by 2
    this.width *= 2;
    // Multiply the height by 2
    this.height *= 2;
  }
}

// Export the class using module.exports
module.exports = Rectangle;

