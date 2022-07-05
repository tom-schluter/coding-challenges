// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// parameters a number representing the initial starting point and a number representing the amount of times the initial number has to be squared by itself

// returns
// an array with the initial number and subsequent squared versions, determined by the second parameter given

// examples, see above

// psuedo code

// create an array with the initial given number as the first element

// create a loop that runs the number of times of the second parameter

// push the current iteration times the current iteration to the arraay

// return the array

function squares(x, n) {
  const result = [x];
  for (let i = 0; i < n; i++) {
    result.push(result[i] * result[i]);
  }
  result.pop();
  return result;
}
