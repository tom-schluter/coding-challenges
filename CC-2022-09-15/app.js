// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

// parameters

// a string

// returns

// an array with a count of the initial strings uppercase characters, lowercase, numbers and special characters in that order

// examples, see above

// pseudo code

// create variables to store each type

// loop over the string and check for each type and adjust variable counts accordingly

// return an array containing the counts in the appropriate order

function solve(s) {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let upper = 0;
  let lower = 0;
  let num = 0;
  let special = 0;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      num++;
    } else if (format.test(s[i]) == true) {
      special++;
    } else if (s[i] == s[i].toLowerCase()) {
      lower++;
    } else {
      upper++;
    }
  }
  return [upper, lower, num, special];
}
