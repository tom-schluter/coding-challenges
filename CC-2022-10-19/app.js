// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// parameters

// array of numbers and a target number

// returns

// the two array elements that add up to the target number

// examples, see above

// psuedo code

// loop over the array

// with each iteration loop over the array again

// if both loops are on the same index continue

// if the elements that the loops are on added together are equal to the target, return the indexes in the form of an array

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) {
        continue;
      } else if (numbers[i] + numbers[j] == target) {
        return [i, j];
      }
    }
  }
}
