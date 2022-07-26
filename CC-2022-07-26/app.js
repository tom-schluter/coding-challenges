// Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

// The function should reject any arguments that are not integers, and sum the remaining integers.

// sum(1, 2, 3)   // -> 6
// sum(1, "2", 3) // -> 4

// parameters

// unspecified number of parameters

// returns

// all integer parameters summed up

// examples, see above

// psuedo code

// create sum variable

// iterate over arguments

// check if argument is integer, if it is add it to the sum

// return the sum

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (Number.isInteger(arguments[i])) {
      sum += arguments[i];
    }
  }
  return sum;
}
