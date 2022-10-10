// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// parameters

// array of integers

// returns

// if there is only one odd integer return that one, if there is only one even integer, return that one

// examples, see above

// pseudo code

// check how many evens and odds there are in the array

// if there are more evens, search and return the odd integer

// else search and return the even integer

function findOutlier(integers) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  if (even > odd) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 != 0) {
        return integers[i];
      }
    }
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 == 0) {
        return integers[i];
      }
    }
  }
}
