// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// parameters

// array of numbers

// returns

// largest n elements of the same array

// examples, see above

// psuedo code

// sort the array in ascending order

// return the last n elements of the array

function largest(n, xs) {
  const sorted = xs.sort((a, b) => a - b);
  if (n == 0) {
    return [];
  } else {
    return sorted.slice(-n);
  }
}
