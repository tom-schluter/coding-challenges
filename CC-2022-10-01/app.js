// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

// parameters

// an array containing numbers 0-9 but missing one random number

// returns

// the missing number in the array

// examples, see above

// pseudo code

// sort the array

// create a loop that runs 0 through 9

// if current loop iteration is not in the array, return it

function getMissingElement(superImportantArray) {
  let sorted = superImportantArray.sort();
  for (let i = 0; i <= 9; i++) {
    if (i != sorted[i]) {
      return i;
    }
  }
}
