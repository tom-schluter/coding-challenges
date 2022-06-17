// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

// function sum(array) {
//   // Use array.reduce() to find and return the
//   // sum of the values in array.
// }
// For example:

// var someNumbers = [1,2,3,4,5,6,7,8,9,10];

// sum(someNumbers); // should return 55

// parameters

// an array of numbers

// returns

// using the reduce function, return the total of the numbers given in the array

// examples, see above

// psuedo code

// use the reduce function...

const sum = (array) => array.reduce((a, b) => a + b, 0);
