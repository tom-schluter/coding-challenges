// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// parameters

// an array filled with some (any) elements

// returns

// the same array but reversed

// examples

// [1,3,5] -> [5,3,1]

// psuedo code

// iterate over the array backwards and push each item to a new array

// return the new array

reverse = function (array) {
  const reverseArr = [];
  for (let i = array.length - 1; i > -1; i--) {
    reverseArr.push(array[i]);
  }
  return reverseArr;
};
