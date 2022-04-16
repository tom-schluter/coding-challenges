// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// psuedo code

// first join the 2 strings

// sort the string

// remove duplicates

// return the string

function longest(s1, s2) {
  // join strings
  let joined = s1.concat(s2);
  // turn string into array
  joined.split("");
  // spread array into new array but filtered
  let result = [...new Set(joined)];
  // sort filtered array and join
  result = result.sort().join("");

  return result;
}

// shorter

const longest = (s1, s2) => {
  s1 = s1.concat(s2).split("");
  let result = [...new Set(s1)];
  return result.sort().join("");
};

// smarter

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// --------------------------------------------------------

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// psuedo code

// first determine if the current number is a perfect square or not, if it isn't return -1

// then add numbers to the current number until a perfect square is found

// then return that number

function findNextSquare(sq) {
  let counter = sq;
  if (Math.sqrt(sq) - Math.floor(Math.sqrt(sq)) !== 0) {
    return -1;
  }
  do {
    counter++;
  } while (Math.sqrt(counter) - Math.floor(Math.sqrt(counter)) !== 0);
  return counter;
}
