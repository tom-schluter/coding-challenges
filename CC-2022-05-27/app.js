// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

// parameters

// several arguments that are integers

// returns

// an integer that represents the sum of all given arguments

// examples
// sum(1, 2, 3, 4, 5) // => 15

// psuedo code

// iterate over the arguments

// sum them using either a seperate variable or maybe a reduce method

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
