// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// psuedo code

// first determine if a is lower than b or the reverse

// use that result to decide to count up or down

// use a loop to iterate over the numbers

// add the numbers to a counter

// return the counter

function getSum(a, b) {
  let counter = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      counter += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      counter += i;
    }
  }
  return counter;
}
