// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// parameters

// a number

// returns

// the sum of all multiples of either 3 or 5 up until the given number in the argument, if a number is both a multiple of 3 and 5 count it only once

// examples, see above

// psuedo code

// create a variable to hold count

// create a loop that runs up to the given number

// check if current iteration is divisible by 3 and 5, if so add it to the count

// check if its divisible by 5, if so add it to the count

// check if its divisible by 3, if so, add it to the count

// return count

function solution(number) {
  let count = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      count += i;
    } else if (i % 3 == 0) {
      count += i;
    } else if (i % 5 == 0) {
      count += i;
    }
  }
  return count;
}
