// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// parameters

// a string

// returns

// maximum number of consecutive vowels in the string

// examples

// assert.strictEqual(solve("codewarriors"),2);
// assert.strictEqual(solve("suoidea"),3);

// pseudo code

// hold count for current count and final count

// loop over the string

// if it is a vowel add to the current count

// if it is not, check if the current count is higher than the final count

// if it is, replace current count with final count and set current count back to 0

// return final count

function solve(s) {
  let count = 0;
  let nextC = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "o" ||
      s[i] == "e" ||
      s[i] == "a" ||
      s[i] == "i" ||
      s[i] == "u"
    ) {
      nextC++;
    } else {
      if (nextC > count) {
        count = nextC;
      }
      nextC = 0;
    }
  }
  return count;
}
