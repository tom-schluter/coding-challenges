// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

// parameters

// an array of elements

// returns

// an object containing each unique element in the given array and the number of times it occurs in the array

// examples, see above

// pseudo code

// store a version of the array that has only unique values

// loop over those unique values and put them into an object, set the value to 0

// for each key in the object, loop over the initial array

// if the array element is equal to the current key, add 1 to the value of that key

// return the object

function count(array) {
  const uniqueArr = [...new Set(array)];
  const result = {};
  uniqueArr.forEach((e) => (result[`${e}`] = 0));
  for (const [key, value] of Object.entries(result)) {
    for (let i = 0; i < array.length; i++) {
      if (key == array[i]) {
        result[key] += 1;
      }
    }
  }
  return result;
}
