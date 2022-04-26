// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// psuedo code

// make an array variable to hold the list

// iterate over the string checking for capital letters

// push index of capital letter to array

// sort array

// return array

var capitals = function (word) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      arr.push(word.indexOf(word[i]));
    }
  }
  return arr.sort();
};

// ---------------------------------------------------

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// psuedo code

// iterate over the array

// use mod % to determine even numbers

// return new array

function noOdds(values) {
  let evenArr = [];
  values.forEach((num) => {
    if (num % 2 === 0) {
      evenArr.push(num);
    }
  });
  return evenArr;
}

// -----------------------------------------------------------

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// psuedo code

// literally sort by length

const sortByLength = (array) => array.sort((a, b) => a.length - b.length);
