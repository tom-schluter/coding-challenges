// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:
// 4 is greater than the sum all the elements to its right side

// Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// Explanation:
// 17 is greater than the sum all the elements to its right side

// 5 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}
// Explanation:
// 5 is greater than the sum all the elements to its right side

// 2 is greater than the sum all the elements to its right side

// Note : The last element -1 is less than the sum of its right elements (abstract zero).

// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
// Explanation:
// 0 is greater than the sum all the elements to its right side

// -1 is greater than the sum all the elements to its right side

// 3 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// parameters

// an array of numbers

// returns

// the "leaders" in the initial array returned as a new array, a leader is a number that is greater than the sum of all the numbers to its right

// examples, see above

// psuedo code

// create an empty result array

// loop through the initial array

// create a variable that holds the total count of all the numbers coming after the current iteration of the loop

// create another loop to go through the numbers after the current iteration of the first loop

// add each number to the count variable

// compare the current number of the first loop to the count variable

// if it is greater push it to the result array

// return the result array at the end

function arrayLeaders(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let sumCount = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      sumCount += numbers[j];
    }
    if (numbers[i] > sumCount) {
      result.push(numbers[i]);
    }
  }
  return result;
}
