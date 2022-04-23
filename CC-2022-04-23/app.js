// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

// psuedo code

// check if number is below 0 or above 12 and throw rangeerror accordingly

// check if number is 0 and return 1 because you cant multiply 0

// use either a loop or recursion to multiply the numbers in descending order

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("must be between 0 and 12");
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// above function runs and multipies the initial number by the initial number -1 and calls itself to keep doing it until n reaches 0;

//  a shorter way below

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// ------------------------------------------------------------

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// psuedo code

// count from 0 up to n with a loop

// square the numbers in the loop and push the results into an array

// loop over the array and count the number of appearances of the  digit d, store this in a counter

// return the counter

function nbDig(n, d) {
  let squareArr = [];
  for (let i = 0; i <= n; i++) {
    squareArr.push(Math.pow(i, 2).toString());
  }
  let count = 0;
  squareArr.forEach((number) => {
    for (let j = 0; j < number.length; j++) {
      if (number[j] === d.toString()) {
        count++;
      }
    }
  });
  return count;
}
