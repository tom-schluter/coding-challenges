// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

// parameters

// will receive a positive integer

// returns

// will return a positive integer

// examples

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

// psuedo code

// make a variable that holds the current count

// make a loop that counts to the given number

// each number must be cubed and then added to the counter

// return the counter

function sumCubes(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += i * i * i;
  }
  return count;
}
