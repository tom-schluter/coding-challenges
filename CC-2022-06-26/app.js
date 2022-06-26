// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// parameters

// a string

// returns

// an array with each word from the string (seperated where spaces were) but sorted alphabetically by the last character from each individual string

// examples = > ('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])

// pseudo code

// create an array by splitting the string at each space

// sort that array alphabetically as usual but do it by identifying the last char of each individual string instead of the whole word

function last(x) {
  let wordArr = x.split(" ");
  wordArr.sort((a, b) => {
    if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
      return -1;
    }
    if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
      return 1;
    }
  });
  return wordArr;
}
