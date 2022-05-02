// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// psuedo code

// use the filter function....

function getEvenNumbers(numbersArray) {
  const result = numbersArray.filter((num) => num % 2 == 0);
  return result;
}

const getEvenNumbers = (numbersArray) =>
  numbersArray.filter((num) => num % 2 == 0);

//   ---------------------------------------------------------

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

// psuedo code

// make a counter for uppercase and a counter for lowercase

// iterate over the string and add to the counters

// adjust the string according to the end count

// return the string

function solve(s) {
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upper++;
    } else {
      lower++;
    }
  }
  if (lower >= upper) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}
