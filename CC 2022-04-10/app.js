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
