// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// paramters

// an array filled with string numbers and/or floats

// returns

// the same array but with strings converted to actual numbers and/or floats

// examples, see above

// psuedo code

// iterate over the array and return a new array with each string converted to its number/float version

// return that new array

const toNumberArray = (stringarray) =>
  stringarray.map((n) => (n = parseFloat(n)));

//   simplified version

const toNumberArray = (stringarray) => stringarray.map(Number);
