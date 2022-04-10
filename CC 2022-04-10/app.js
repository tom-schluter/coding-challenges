// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// psuedo code

// first we split the words into an array

// then we loop over the array to find the shortest word

// then we return the value

// first try

function findShort(s) {
  let arr = s.split(" ");
  let result = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < result) {
      result = arr[i].length;
    }
  }
  return result;
}

//   shorter with sort

const findShort = (s) =>
  s.split(" ").sort((a, b) => a.length - b.length)[0].length;

//   ----------------------------------------------------------

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// psuedo code

// it has to be case insensitive so first we turn the input into lowercase (or uppercase)

// then we compare a count of x's and o's

// if equal return true, if not return false

function XO(str) {
  str = str.toLowerCase();
  let oCount = str.split("o").length - 1;
  let xCount = str.split("x").length - 1;
  if (oCount === xCount) {
    return true;
  } else {
    return false;
  }
}

//  another way

const XO = (str) => {
  str = str.toLowerCase();
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x++;
    } else if (str[i] === "o") {
      o++;
    } else {
      continue;
    }
  }
  if (x === o) {
    return true;
  } else {
    return false;
  }
};

const XO = (str) => {
  str = str.toLowerCase();
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === "x" ? x++ : str[i] === "o" ? o++ : false;
  }
  if (x === o) {
    return true;
  } else {
    return false;
  }
};
