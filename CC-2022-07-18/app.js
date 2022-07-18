// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

// parameters

// a string

// returns

// individual words in the string longer than n

// examples, see above

// psuedo code

// split the sentence

// iterate over the words and check for length longer than n

// if it is longer push to a result array

// return result array

function filterLongWords(sentence, n) {
  const words = sentence.split(" ");
  const result = [];
  words.forEach((word) => {
    if (word.length > n) {
      result.push(word);
    }
  });
  return result;
}
