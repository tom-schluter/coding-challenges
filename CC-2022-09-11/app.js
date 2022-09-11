// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

// parameters

// a string

// returns

// the even characters in order and then a space and then the odd characters in order

// examples, see above

// psuedo code

// loop over the string

// if the current iteration mod 2 equals 0 or if it is already 0 push to an even array

// if it is not, push to an odd array

// return a string with the even array joined, a space and then the odd array joined

function sortMyString(S) {
  const odd = [];
  const even = [];
  for (let i = 0; i < S.length; i++) {
    if (i % 2 == 0 || i == 0) {
      even.push(S[i]);
    } else {
      odd.push(S[i]);
    }
  }
  return `${even.join("")} ${odd.join("")}`;
}
