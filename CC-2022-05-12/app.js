// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// psuedo code

// set variable to array[0]

// iterate over the array and replace variable value with current longest number

// return that number

function findLongest(array) {
  let longest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().length > longest.toString().length) {
      longest = array[i];
    }
  }
  return longest;
}
