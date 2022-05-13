// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

// psuedo code

// loop through the object and use string literal to return the appropriate string

// push that string to an array

// join the array with commas in between

// return that joined array

function solution(pairs) {
  let result = [];
  for (const key in pairs) {
    result.push(`${key} = ${pairs[key]}`);
  }
  return result.join(",");
}
