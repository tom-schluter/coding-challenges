// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// psuedo code

// spread array math min and math max into new array

function minMax(arr) {
  const newArr = [];
  newArr.push(Math.min(...arr));
  newArr.push(Math.max(...arr));
  return newArr;
}

const minMax = (arr) => {
  const newArr = [];
  newArr.push(Math.min(...arr), Math.max(...arr));
  return newArr;
};

// ------------------------------------------------------------

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//  find a way to count the number of times each number appears

// select the lowest one out of those

// extremely ugly but works...

function stray(numbers) {
  let firstCount = 0;
  let secondVal = 0;
  let secondCount = 0;
  numbers.forEach((num) => {
    if (num === numbers[0]) {
      firstCount++;
    } else {
      secondCount++;
      secondVal = num;
    }
  });
  if (firstCount > secondCount) {
    return secondVal;
  } else {
    return numbers[0];
  }
}

//   smarter solution

function stray(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter((x) => x == max).length == 1 ? max : min;
}

// --------------------------------------------------------------------------

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// psuedo code

// create a count variable

//  count from 1 to the input number

// if the current number is divisible to an even number add 1 to the count

// return the count

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}
