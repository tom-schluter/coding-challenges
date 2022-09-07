// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!

// parameters

// an array filled with string(s)

// returns

// the value of each individual array element multiplied by its position in the array

// examples, see above

// psuedo code

// loop over the array

// loop over the characters in the array

// convert each individual character to it's alphabet position number and add it to a count. Unless it is a space, in which case add nothing

// push that count, mulitplied by it's original array position, to a result array

// return the result array

function wordValue(a) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    let c = 0;
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] != " ") {
        c += a[i].charCodeAt(j) - 96;
      }
    }
    res.push(c * (i + 1));
  }
  return res;
}
