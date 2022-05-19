// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// parameters

// input of letters in lower case, no empty strings

// returns

// a positive integer

// examples

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// psuedo code

// make a counter variable

// create a loop that iterates over the letters and converts it to a numeric value, add that value to the counter

// return the counter

function wordsToMarks(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count += string.charCodeAt(i) - 96;
  }
  return count;
}
