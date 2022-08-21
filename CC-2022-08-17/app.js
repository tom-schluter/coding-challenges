// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// parameters

// a number

// returns

// the number reversed, negative numbers should remain negative

// examples, see above

// psuedo code

// split the number into an array

// reverse the array

// check if the last character is minus

// if so, move the minus to the front

// return the joined number version of the array

function reverseNumber(n) {
  let numArr = n.toString().split("");
  numArr.reverse();
  if (numArr[numArr.length - 1] == "-") {
    numArr.pop();
    numArr.unshift("-");
    return Number(numArr.join(""));
  } else {
    return Number(numArr.join(""));
  }
}
