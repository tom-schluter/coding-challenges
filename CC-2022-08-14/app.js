// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

// parameters

// a string

// returns

// an array, the first item consisting of the given string with even indexed characters capitalized (0 counts as even), the second item with odd characters capitalized

// examples, see above

// psuedo code

// create empty string variables to hold the first and second version of the string

// iterate over the given string, if current iteration % 2 is 0 then add uppercase version of iteration to first variable and lowercase to second variable

// else do the opposite

// return array holding both variables

function capitalize(s) {
  let numOne = "";
  let numTwo = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      numOne += s[i].toUpperCase();
      numTwo += s[i];
    } else {
      numOne += s[i];
      numTwo += s[i].toUpperCase();
    }
  }
  return [numOne, numTwo];
}
