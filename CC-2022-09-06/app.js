// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// Be sure to also try:

// parameters

// string of letters, array of numbers

// returns

// same string but letters at indexes of the numbers in the array captialized

// examples, see above

// pseudo code

// loop over the string

// if the index of the current iteration is in the given array turn it to uppercase

function capitalize(s, arr) {
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (arr.includes(i)) {
      sArr[i] = sArr[i].toUpperCase();
    }
  }
  return sArr.join("");
}
