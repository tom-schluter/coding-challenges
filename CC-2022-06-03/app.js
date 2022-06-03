// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// parameters

// an array filled with at least 1 number, no duplicates, second paramter is a string holding either 'value or 'index'

// returns

// depending on the second parameter return either the lowest value of the given array or the index of the lowest value of the given array

// examples
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// psuedo code

// if the second parameter contains the string 'value'

// return the lowest value of the array

// if the second parameter contains the string 'index'

// return the index of the lowest value of the array

const min = (arr, toReturn) =>
  toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
