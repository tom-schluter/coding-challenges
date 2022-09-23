// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// paramaters

// an array that may or may not contain other arrays

// returns

// the same array but flattened by 1 level, so 1 level of arrays is removed

// examples, see above

// pseudo code

// check if there are multiple levels of arrays, if not return the initial array

// loop over the array

// loop over the current iteration of the former loop

// push each element to a result array

// return the result array

var flatten = function (array) {
  const flatArr = [];
  if (!Array.isArray(array[0])) {
    return array;
  }
  array.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      flatArr.push(arr[i]);
    }
  });
  return flatArr;
};
