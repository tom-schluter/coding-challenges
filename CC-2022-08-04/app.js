// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// parameters

// a string in camelCase

// returns

// the same string but spaces instead of camelcase

// examples, see above

// psuedo code

// iterate over the string

// if current iteration is not uppercase add it to a result variable

// if it is uppercase add a space and then the current letter to the result variable

// return result variable

function solution(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      result += " ";
      result += string[i];
    } else {
      result += string[i];
    }
  }
  return result;
}
