// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// parameters

// a number

// returns

// the sum of all multiples of 3 and 5 counting up to the given argument number

// examples, see above

// psuedo code

// create variable to store result

// loop from 0 to the given number, if current iteration is divisible by 3 add it to the result, and the same by 5

// return result

function findSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0) {
      result += i;
    } else if (i % 5 == 0) {
      result += i;
    }
  }
  return result;
}
