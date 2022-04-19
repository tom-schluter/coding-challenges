// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// psuedo code

// add all array items

//  % 2 on the array

// return even or odd accordingly

const oddOrEven = (array) =>
  array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";

// -------------------------------------------------------------------

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// psuedo code

// create a new array

// iterate over the old array but remove the lowest value and push the  rest to new array

// return new array

function removeSmallest(numbers) {
  let newArr = [...numbers];
  if (numbers === []) {
    newArr = [];
  } else {
    let min = Math.min(...numbers);
    newArr.splice(newArr.indexOf(min), 1);
  }
  return newArr;
}
