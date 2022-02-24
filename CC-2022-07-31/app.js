// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// parameters

// a string

// returns

// each letter of the string converted to its number position in the alphabet (only the letters) with a space in between each number

// examples, see above

// psuedo code

// isolate the letters by turning it into an array

// iterate over the array and push each letter converted to a new array

// return the array joined with spaces

function alphabetPosition(text) {
  let letterArr = [];
  let numArr = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i].toUpperCase() != text[i].toLowerCase()) {
      letterArr.push(text[i]);
    }
  }
  letterArr.forEach((letter) =>
    numArr.push(letter.toLowerCase().charCodeAt(0) - 96)
  );
  return numArr.join(" ");
}
