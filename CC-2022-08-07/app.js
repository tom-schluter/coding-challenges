// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// parameters

// a string sentence

// returns

// the word with the highest value (in alphabet number positions)
// if the highest occurs twice, return the first word in the sentence that scores highest

// example ('man i need a taxi up to ubud'), 'taxi');

// psuedo code

// create array of words

// iterate over the array and inside that loop iterate over the letters of each individual word

// create variables for current and highest scoring word

// if current is higher than previous, replace the high score

// return the first word with the highest score

function high(x) {
  let hScore = 0;
  let currentWord = "";
  const words = x.split(" ");
  words.forEach((word) => {
    let currentScore = 0;
    for (let i = 0; i < word.length; i++) {
      currentScore += word[i].charCodeAt(0) - 96;
    }
    if (currentScore > hScore) {
      hScore = currentScore;
      currentWord = word;
    }
  });
  return currentWord;
}
