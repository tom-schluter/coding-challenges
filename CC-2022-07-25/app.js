// Write a function named numbers.

// function should return True if all parameters are of the Number type.

// The function should accept any number of parameters.

// Example usage:

// numbers(1, 4, 3, 2, 5); // true
// numbers(1, "a", 3); // false
// numbers(1, 3, NaN); // true

// parameters

// unspecified nunmber of arguments

// returns

// true if all arguments are numbers, false otherwise

// examples, see above

// psuedo code

// iterate over the arguments

// check if current argument is null or a string, return false, else return true

function numbers() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] == null || typeof arguments[i] === "string") {
      return false;
    }
  }
  return true;
}
