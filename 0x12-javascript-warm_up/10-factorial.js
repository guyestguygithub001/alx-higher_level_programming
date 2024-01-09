#!/usr/bin/node
const factorial = (n) => {
  if (isNaN(n)) {
    return 1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(1)); // Output: 1
console.log(factorial(3)); // Output: 6
console.log(factorial(89)); // Output: 1.6507955160908452e+136
console.log(factorial(333)); // Output: Infinity

