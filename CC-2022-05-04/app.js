// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

// psuedo code

// write a loop that concatenates a string

// return that string

function repeater(string, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
}

//   --------------------------------------------------------------

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

// psuedo code

// first remove duplicates

// then sort from low to high

// then join the array and return it as a number

function minValue(values) {
  let uniqueNum = [...new Set(values)];
  uniqueNum.sort((a, b) => a - b);
  return Number(uniqueNum.join(""));
}
