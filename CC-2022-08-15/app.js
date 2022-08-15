// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// parameters

// a string

// returns

// true if all characters are unique, false otherwis

// examples

// Test.assertEquals(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
// Test.assertEquals(hasUniqueChars("abcdef"),true)
// Test.assertEquals(hasUniqueChars("aA"),true) // case - sensitivity
// Test.assertEquals(hasUniqueChars("++-"),false) // because there are two '+'

// psuedo code

// iterate over the string

// for each iteration, iterate over the string again

// check if current iteration matches initial iteration

// if it does add to a counter

// if the counter reaches higher than 1, return false

// otherwise return true

function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}
