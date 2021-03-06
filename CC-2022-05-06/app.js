// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// psuedo code

// create variables for team one and team two

// loop over the array to add the weight of every other person starting count from 0

// loop over the array again starting count from one

// add weights accordingly

// return as array

function rowWeights(array) {
  let team1 = 0;
  let team2 = 0;
  let result = [];
  for (let i = 0; i < array.length; i += 2) {
    team1 += array[i];
  }
  for (let i = 1; i < array.length; i += 2) {
    team2 += array[i];
  }
  result.push(team1, team2);
  return result;
}

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  }
  do {
    n = n / 2;
  } while (n > 0 && n % 2 === 0);
  if (n === 1) {
    return true;
  } else {
    return false;
  }
}

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

// psuedo code

// the steps are already listed in the description

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt(
      age1 * age1 +
        age2 * age2 +
        age3 * age3 +
        age4 * age4 +
        age5 * age5 +
        age6 * age6 +
        age7 * age7 +
        age8 * age8
    ) / 2
  );
}

// apparenlty you can spread parameters into an array and apparently hypot function returns the square root of the sum of squares of its arguments

const predictAge = (...ages) => (Math.hypot(...ages) / 2) | 0;
