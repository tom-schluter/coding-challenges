// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// psuedo code

// figure out if string is odd or even

// divide the string accordingly

// get character(s) at division point

// return the characters

// first attempt regular function

function getMiddle(s) {
  if (s.length % 2 !== 0) {
    return s.charAt(s.length / 2);
  } else {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  }
}

// second attempt arrow function with ternary operator

const getMiddle = (s) =>
  s.length % 2 !== 0
    ? s.charAt(s.length / 2)
    : s.substring(s.length / 2 - 1, s.length / 2 + 1);

// a smarter persons solution

const getMiddle = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1);

// ----------------------------------------------

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// psuedo code

// the formula to figure out if a number is a perfect square is to is to take the square of the number and see if the result is a whole number. if it is, it's perfect otherwise it's not

// So first we take the number and check if it is less than 0, if it is we return false

// then we calculate the square root of the number and see if it is a whole number

// then return true or false accordingly

const isSquare = (n) => {
  if (n < 0) {
    return false;
  } else if (Math.sqrt(n) - Math.floor(Math.sqrt(n)) !== 0) {
    return false;
  } else {
    return true;
  }
};
