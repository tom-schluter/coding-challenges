// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// psuedo code

// turn string into array

// filter the array

// reverse and join the array

// return it

// in the below function we identify letters by comparing uppercase to lowercase, if they dont equal then they're letters

function reverseLetter(str) {
  const strArr = str.split("");
  const filteredArr = strArr.filter(
    (char) => char.toLowerCase() !== char.toUpperCase()
  );
  return filteredArr.reverse().join("");
}

// combined

const reverseLetter = (str) =>
  str
    .split("")
    .filter((char) => char.toLowerCase() !== char.toUpperCase())
    .reverse()
    .join("");

// -----------------------------------------------

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// psuedo code

// find the array item that does not equal the highest or lowest value

// return the index of that array item

function gimme(triplet) {
  const max = Math.max(...triplet);
  const min = Math.min(...triplet);
  const result = triplet.find((e) => e !== max && e !== min);
  return triplet.indexOf(result);
}
