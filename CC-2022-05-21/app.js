// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

// parameters

// a string of integers from 0 and up

//  returns

//  a string of integers 0 and up

// examples

// explode("102269")
// should return :

// "12222666666999999999"

// pseudo code

// create a result variable which is an empty string

// loop over the given string, within that loop create another loop to repeat the current string number times the current string number

//  push the string number to the result variable each time

// return the result variable

function explode(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < parseInt(s[i]); j++) {
      result += s[i];
    }
  }
  return result;
}
