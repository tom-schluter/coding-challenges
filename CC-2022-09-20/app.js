// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

// parameters

// a string containing letters and numbers

// returns

// the highest consecutive number in the string

// examples, see above

// psueod code

// loop over the string

// check if the current iteration is a number

// if it is add that number to a variable that holds the current number

// make a variable to hold the highest number

// compare if the current number is higher then the highest number

// if it is, make the current number the highest number

// if the iteration is not a number, clear the current number variable

// return the highest number variable at the end

function solve(s) {
  let currentNum = "";
  let highestNum = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      currentNum += s[i];
      if (Number(currentNum) > Number(highestNum)) {
        highestNum = currentNum;
      }
    } else {
      currentNum = "";
    }
  }
  return Number(highestNum);
}
