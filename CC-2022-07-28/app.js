// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

// parameters

// a string

// returns

// an array with only the even characters of the string (starting at 1 not 0)

// examples, see above

// psuedo code

// check for string length of less than 2 or greater than 100 and return invalid string if it is

// create an array from the string splitting each character

// create a new array by filtering out all the odd elements in the other array

function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }
  let arr = string.split("");
  const filtered = arr.filter((element, index) => {
    return index % 2 !== 0;
  });
  return filtered;
}
