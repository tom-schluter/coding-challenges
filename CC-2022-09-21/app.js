// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

// parameters

// a number

// returns

// the same number split in to individual digits put into an array

// examples, see above

// psuedo code

// turn the number into a string

// split the string into an array

// turn each array element back into a number

// return the array

const digitize = (n) =>
  n
    .toString()
    .split("")
    .map((num) => (num = Number(num)));
