// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// parameters

// an unspecified number of arguments that are integers

// returns

// a string of sorted integers not included in the original argument

// examples, see above

// pseudo code

// create an array that holds integers 0 to 9

// make an array out of the arguments given and join them into a string

// iterate over the string and see if the current itteration is somewhere in the first array made

// if it is, filter that number out of the first array

// then return the first array sorted and joined into a string

function unusedDigits() {
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let d = Array.from(arguments);
  d = d.join("");
  for (let i = 0; i < d.length; i++) {
    if (num.includes(d[i])) {
      num = num.filter((e) => e !== d[i]);
    }
  }
  return num.sort().join("");
}
