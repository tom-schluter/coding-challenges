// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// psuedo code

// turn the number into a string and split it

// turn them back into numbers and add them up

// return the total

function sumDigits(number) {
  if (number < 0) {
    number = number * -1;
  }
  number = number.toString();
  let numArr = number.split("");
  let result = numArr.reduce((prev, cur) => Number(prev) + Number(cur), 0);
  return result;
}

// ----------------------------------------------------------------------

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// psuedo code

// first identify if there is # present

// if there is find the index of it

// remove from that index to the end of the string

// return string

function removeUrlAnchor(url) {
  if (url.includes("#")) {
    let index = url.indexOf("#");
    const newStr = url.substring(0, index);
    return newStr;
  } else {
    return url;
  }
}

// or

const removeUrlAnchor = (url) =>
  url.includes("#") ? url.substring(0, url.indexOf("#")) : url;
