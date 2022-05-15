// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// pseudo code

// make a function with the array parameter

// make a function inside that with the number parameter

// make a variable inside that function that is an empty array

// loop over the initial array and multiply each element by the given number and push the result to the new array

// return the new array

function multiplyAll(array) {
  return function (num) {
    let multiArr = [];
    array.forEach((e) => multiArr.push(e * num));
    return multiArr;
  };
}

// shorter implementation

multiplyAll = (a) => (x) => a.map((e) => e * x);
