// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

const angle = (n) => Math.round((180 - 360 / n) * n);

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// }

// psuedo code

// create a counter that counts to N

// see if the current number is divisible by both 5 and 3 and return FizzBuzz

// see if current number is divisible by 5 and return Buzz if it is

// see if current number is divisible by 3 and return Fizz if it is

// return current number alternatively

// all if this has to be returned in an array

function fizzbuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      result.push("FizzBuzz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else {
      result.push(i);
    }
  }
  return result;
}
