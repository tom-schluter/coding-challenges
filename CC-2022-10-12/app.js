// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// parameters

// a positive integer

// returns

// the integer reduced to single digit through multiplication of each individual digit of the original number

// examples, see above

// psuedo code

// if the number is less than 10 return 0, because 0 steps are needed

// else split the number into an array and multiply by each element

// if the result is still above a single digit, add 1 to a counter and repeat the process

// return the counter at the end

function persistence(num) {
  if (num < 10) {
    return 0;
  } else {
    let count = 0;
    do {
      let arr = num.toString().split("");
      num = arr.reduce((a, b) => a * b);
      count++;
    } while (num > 9);
    return count;
  }
}
