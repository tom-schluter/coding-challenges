// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

// psuedo code

// make an if else statement for each operator, or chain ternary operators

const arithmetic = (a, b, operator) =>
  operator === "add"
    ? a + b
    : operator === "subtract"
    ? a - b
    : operator === "divide"
    ? a / b
    : a * b;

// example with a switch statement

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

// simple switch

const arithmetic = (a, b, operator) =>
  ({
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  }[operator]);

// -----------------------------------------------------------------

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// psuedo code

// make a counter

//  loop through the array

// for each element, prefix a number from the counter and add one to the counter

// return the adjusted array

var number = function (array) {
  for (let i = 1; i <= array.length; i++) {
    array[i - 1] = `${i}: ${array[i - 1]}`;
  }
  return array;
};
