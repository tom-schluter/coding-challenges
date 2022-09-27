// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

// parameters

// a number

// returns

// the same number in string format that is at least 5 characters long, any additional characters needed for the number will be 0's in the front

// examples, see above

// psuedo code

// turn the value into an array of string numbers

// create a loop that starts at the length of the array and counts until 5

// for each iteration add a "0" to the front of the array

// return the appropriate string in template literal format, with the array joined

function solution(value) {
  let valArr = value.toString().split("");
  for (let i = valArr.length; i < 5; i++) {
    valArr.unshift("0");
  }
  return `Value is ${valArr.join("")}`;
}
