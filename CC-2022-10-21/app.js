// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// parameters

// a string

// returns

// a string with even indexed letters (0 included) turned uppercase and the others lowercase, spaces ignored

// examples, see above

// psuedo code

// split the string into seperate words

// loop over each word and on even loops turn the current character to uppercase

// push those words to a result array

// return that array joined with spaces in between

function toWeirdCase(string) {
  let arr = string.split(" ");
  let result = [];
  arr.forEach((word) => {
    let w = "";
    for (let i = 0; i < word.length; i++) {
      if (i == 0 || i % 2 == 0) {
        w += word[i].toUpperCase();
      } else {
        w += word[i].toLowerCase();
      }
    }
    result.push(w);
  });
  return result.join(" ");
}
