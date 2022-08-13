// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

// parameters

// a number

// returns

// the 5 consecutive numbers within the given number that make up the largest number

// examples, see above

// psuedo code

// create a variable to hold the current highest number

// iterate over the given number and compare the current iteration with the next 4 numbers (As one number) to the current highest number variable

// if its higher, replace it

// return the variable

function solution(digits) {
  let currentNum = 0;
  let stringNum = digits.toString();
  for (let i = 0; i < digits.length; i++) {
    let num = stringNum.substr(i, 5);
    if (Number(stringNum.substr(i, 5)) > currentNum) {
      currentNum = Number(stringNum.substr(i, 5));
    }
  }
  return currentNum;
}
