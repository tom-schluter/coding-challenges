// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// parameters

// an array of integers that will be at least 'number' long

// will contain 'number' amount of even numbers

// returns

// an array of even integers

// examples

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]

// psuedo code

// first copy the array and get only the even numbers

// next return only the last 'number' of elements of the array

function evenNumbers(array, number) {
  const evens = array.filter((num) => num % 2 === 0);
  return evens.slice(evens.length - number);
}
