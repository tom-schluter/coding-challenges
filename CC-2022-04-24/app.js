// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// psuedo code

// check if the length of the test input is equal to original, if not return false

// turn test and original into arrays, sort the arrays and rejoin them

// if test is the same as original its an anagram and return true, otherwise return false

// use toLowerCase to make it case insensitive

// ugly solution below
var isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();
  if (test.length !== original.length) {
    return false;
  }
  let testArr = test.split("").sort().join("");
  let originalArr = original.split("").sort().join("");
  if (testArr === originalArr) {
    return true;
  } else {
    return false;
  }
};

// better

const isAnagram = (test, original) => {
  let t = test.toLowerCase().split("").sort().join("");
  let o = original.toLowerCase().split("").sort().join("");
  return t == o ? true : false;
};

// --------------------------------------------------------------

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// psuedo code

// make a counter variable

// use a loop to count up to the given number and increment the counter unless a 5 is present in the current number

// return count;

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      count++;
    }
  }
  return count;
}

// ----------------------------------------------------------


