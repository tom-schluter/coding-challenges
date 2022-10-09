// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// parameters

// a string

// returns

// a case-insensitive count of characters that occur more than once in the string

// examples, see above

// pseudo code

// turn each character lowercase and seperate them

// count each occurrence of the characters

// if the occurrence is greater than 1, add 1 to a counter variable

// return the counter variable

function duplicateCount(text) {
  const arr = text.toLowerCase().split("");
  const count = {};
  let result = 0;
  for (const e of arr) {
    if (count[e]) {
      count[e] += 1;
    } else {
      count[e] = 1;
    }
  }
  for (const [key, value] of Object.entries(count)) {
    if (value > 1) {
      result++;
    }
  }
  return result;
}
