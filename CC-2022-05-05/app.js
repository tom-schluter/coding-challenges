// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// psuedo code

// iterate over the array

// push each word into a new array but check if the new array already includes it

// return the new array

function removeDuplicateWords(s) {
  let arr = [];
  s = s.split(" ");
  s.forEach((word) => {
    if (!arr.includes(word)) {
      arr.push(word);
    }
  });
  return arr.join(" ");
}

// more clever

const removeDuplicateWords = (s) => [...new Set(s.split(" "))].join(" ");

// ----------------------------------------------

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

// psuedo code

// join all the arrays

// sort the new array

// return it

function flattenAndSort(array) {
  let newArr = [];
  array.forEach((arr) => (newArr = newArr.concat(arr)));
  return newArr.sort((a, b) => a - b);
}
