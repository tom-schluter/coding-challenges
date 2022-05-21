// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// parameter

// a sequence of integers in an array, minimum of two elements

// returns

// an integer

// examples

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)

// psuedo code

// first find the highest number in the array

// remove that number from the array and find the highest number again

// add the two together and return the result

function largestPairSum(numbers) {
  const highest = Math.max(...numbers);
  let secondArr = [...numbers];
  secondArr.splice(secondArr.indexOf(highest), 1);
  const secondHighest = Math.max(...secondArr);
  return highest + secondHighest;
}

//   better method would be to sort and then add the first two indexes

const largestPairSum = (numbers) => {
  numbers.sort(a, (b) => a - b);
  return numbers[0] + numbers[1];
};
