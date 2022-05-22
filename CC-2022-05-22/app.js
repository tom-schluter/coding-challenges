// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

// parameters

// object that is not empty, has key value pairs

// returns

// array with an array for keys and array for values inside

// examples

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// psuedo code

// create array for keys and array for values (empty)

// iterate over keys and push each to key array

// do the same for values

// return an array containing both of the previously mentioned arrays

function keysAndValues(data) {
  const keyArr = [];
  const valueArr = [];
  Object.keys(data).forEach((key) => {
    keyArr.push(key);
  });
  Object.values(data).forEach((val) => {
    valueArr.push(val);
  });
  return [keyArr, valueArr];
}
