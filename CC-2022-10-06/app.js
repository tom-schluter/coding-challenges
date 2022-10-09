// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// parameters

// array of integers

// returns

// the integer that appears an odd number of times in the array (there is only one)

// examples, see above

// psuedo code

// count the occurance of each integer in the array

// return the one that is odd

function findOdd(A) {
  const count = {};
  for (const e of A) {
    if (count[e]) {
      count[e] += 1;
    } else {
      count[e] = 1;
    }
  }
  for (const [key, value] of Object.entries(count)) {
    if (value % 2 != 0) {
      return Number(key);
    }
  }
}
