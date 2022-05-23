// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// parameters

//  positive integer between 1 and 50

// returns

// a string that represents a square of + characters

// examples

// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// psuedo code

// create an empty string variable

// create an empty array

// create a loop that concats + times the input to the empty string

// create a loop that runs times the input, and pushes the string to the array each time

// return the joined array, join with line breaks in between

function generateShape(integer) {
  const result = [];
  let str = "";
  for (let i = 0; i < integer; i++) {
    str += "+";
  }
  for (let j = 0; j < integer; j++) {
    result.push(str);
  }
  return result.join("\n");
}
