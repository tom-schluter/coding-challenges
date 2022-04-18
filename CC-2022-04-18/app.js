// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// psuedo code

// make a counter for invalid letters

// return the counter compared to the initial string length

function printerError(s) {
  let errorCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "n" ||
      s[i] == "o" ||
      s[i] == "p" ||
      s[i] == "q" ||
      s[i] == "r" ||
      s[i] == "s" ||
      s[i] == "t" ||
      s[i] == "u" ||
      s[i] == "v" ||
      s[i] == "w" ||
      s[i] == "x" ||
      s[i] == "y" ||
      s[i] == "z"
    ) {
      errorCount++;
    }
  }
  return `${errorCount}/${s.length}`;
}

const printerError = (s) => {
  let errorCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      errorCount++;
    }
  }
  return `${errorCount}/${s.length}`;
};

// -------------------------------------------------------

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// psuedo code

// iterate over the array

// if age is over 55 and handicap greater than 7 put "Senior" in new array

// otherwise put "Open" in new array

// return newarray

const openOrSenior = (data) =>
  data.map((person) => (person[0] >= 55 && person[1] > 7 ? "Senior" : "Open"));

// ----------------------------------------------------------

//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// simply compare the ending of the first string to the second string

// return true or false accordinly

function solution(str, ending) {
  if (str.endsWith(ending)) {
    return true;
  } else {
    return false;
  }
}

const solution = (str, ending) => (str.endsWith(ending) ? true : false);

// -------------------------------------------------------------

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// psuedo code

// convert array to string

// convert binary string to number

// return number

const binaryArrayToNumber = (arr) => {
  let num = arr.join("");
  return parseInt(num, 2);
};

const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);
