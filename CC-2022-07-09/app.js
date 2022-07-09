// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.

// parameters

// a positive number

// returns

// if the number is even return the number in binary if it is odd return it in hexadecimal
// return should be a string

// examples

// evensAndOdds(15) => '0xF'

// psuedo code

// check if number is divisible by 2 and the remainder is 0

// if it is turn to binary if it isnt turn to hex

const evensAndOdds = (num) =>
  num % 2 == 0 ? num.toString(2) : num.toString(16);
