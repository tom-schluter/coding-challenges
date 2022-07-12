// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// parameters

// array of integers

// returns

// sum of the even indexed array elements multiplied by the last array element

// examples

// [2,2,2,2] => 8

// psuedo code

// if array is empty return 0

// loop through array, on even loops add array element to sum count

// return sum count multiplied by last array element

function evenLast(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum * numbers[numbers.length - 1];
}
