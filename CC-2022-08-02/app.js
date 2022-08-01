// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// parameters

//  a string

// returns

// true or false depending on wether or not the string contains every single letter of the alphabet

// examples, see above

// psuedo code

// iterate over the string

// if the current iteration converted to uppercase is not the same as the current iteration to lower case it's a letter not a space or symbol

// in that case push the lowercase version to an array

// use new set to create an array of only unique elements of the other array

// if the unique arrays length is 26 it will have all the characters of the alphabet and return true, otherwise return false


function isPangram(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() != string[i].toLowerCase()) {
      arr.push(string[i].toLowerCase());
    }
  }
  let uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
  if (uniqueArr.length == 26) {
    return true;
  } else {
    return false;
  }
}
