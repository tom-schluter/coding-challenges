// DESCRIPTION:
// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

// parameters

// array filled with elements

// returns

// the sum of all even whole integers in the array

// examples, see above

// psuedo code

// loop over array and check each iteration if it is an integer and if it is even

// if so add to a count variable

// return count variable

function sumEvenNumbers(input) {
  let count = 0;
  input.forEach((num) => {
    if (Number.isInteger(num) && num % 2 == 0) {
      count += num;
    }
  });
  return count;
}
