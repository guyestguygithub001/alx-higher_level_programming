#!/usr/bin/node
class Rectangle {
  // Declare the width and height properties using class fields syntax
  width;
  height;

  // Use the constructor method to define the class properties
  constructor(w, h) {
    // Use setters to assign the width and height properties
    this.width = w;
    this.height = h;
  }

  // Create an instance method called print() that prints the rectangle using the character X
  print() {
    // Use a loop to print each row of the rectangle
    for (let i = 0; i < this.height; i++) {
      // Use the repeat() method to create a string of X characters with the length of the width
      console.log('X'.repeat(this.width));
    }
  }

  // Use getters to access the width and height properties
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  // Use setters to validate and assign the width and height properties
  set width(value) {
    // Check if the value is a positive integer
    if (value > 0 && Number.isInteger(value)) {
      // Assign the value to the private property _width
      this._width = value;
    } else {
      // Throw an error if the value is invalid
      throw new Error('Invalid width');
    }
  }

  set height(value) {
    // Check if the value is a positive integer
    if (value > 0 && Number.isInteger(value)) {
      // Assign the value to the private property _height
      this._height = value;
    } else {
      // Throw an error if the value is invalid
      throw new Error('Invalid height');
    }
  }
}

// Export the class using module.exports
module.exports = Rectangle;

