// The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

// For example:

// countChar("fizzbuzz","z") => 4
// countChar("Fancy fifth fly aloof","f") => 5
// The character can be any alphanumeric character.

// Good luck.

// parameters

// a string and a character

// returns

// the number of times the character is present in the string

// examples, see above

// psuedo code

// loop over the string

// check if current iteration is equal to the given char

// if it is add 1 to a counter variable

// return counter variable at the end.

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == char.toLowerCase()) {
      count++;
    }
  }
  return count;
}
