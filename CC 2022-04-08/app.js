// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// psuedo code

// first we take the number and split it into an array

// then we sort the array from high to low

// then we join the array back into a single number

// then we return that number

// first try

function descendingOrder(n) {
  let numArr = String(n).split("");
  numArr = numArr.sort((a, b) => b - a);
  let result = numArr.join("");
  return Number(result);
}

// all together in an arrow function

const descendingOrder = (n) =>
  Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

//   could have simply called a sort() and reverse()

// -------------------------------------------------

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// psuedo code

// apply filter to array for numbers using typeof

// return new filtered arr

function filter_list(l) {
  let result = l.filter((item) => typeof item === "number");
  return result;
}

//   shorter

const filter_list = (l) => l.filter((item) => typeof item === "number");
