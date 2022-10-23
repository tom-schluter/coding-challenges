// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// parameters

// an array with words (Strings) and another array with words(strings) that might include words from the first array within the words

// returns

// the words from the first array that are included in words from the second array, sorted alphabetically returned as an array

// examples, see above

// pseudo code

// loop over the second array and within each iteration loop over the first array

// create an array to store the result

// if the current word of the second array includes the current word from the first array, but isnt yet in the result array, push it to the result array

// return the sorted version of the result array

function inArray(array1, array2) {
  let result = [];
  array2.forEach((word) => {
    for (let i = 0; i < array1.length; i++) {
      if (word.includes(array1[i]) && !result.includes(array1[i])) {
        result.push(array1[i]);
      }
    }
  });
  return result.sort();
}
