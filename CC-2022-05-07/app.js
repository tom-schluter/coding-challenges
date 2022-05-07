// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

function add(n) {
  return function Add(m) {
    return n + m;
  };
}

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

// make a total count;

// iterate over the array, sort the array and then take the first item from the array

// return the total

function sumOfMinimums(arr) {
  let total = 0;
  arr.forEach((arr) => arr.sort((a, b) => a - b));
  arr.forEach((arr) => (total += arr[0]));
  return total;
}

// someone else using reduce to add the lowest value by spreading the array into math.min

function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}
