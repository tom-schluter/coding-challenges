// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// parameters

// a string

// returns

// the string split into equal parts of 2 returned in the form of an array, if the string is not an even number of characters, add '_' to the end

// examples. see above

// psuedo code

// check if the string is uneven, if it is, add '_'

// loop over the string by increments of 2 and add the current index plus the next to an array

// return the array

function solution(str) {
  if (str.length % 2 != 0) {
    str += "_";
  }
  const arr = [];
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2));
  }
  return arr;
}
