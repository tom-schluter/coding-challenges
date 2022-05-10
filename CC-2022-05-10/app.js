// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// psuedo code

// split the string into an array

// iterate over the array and filter for vowels, push the indexes of those vowels to a new array

// return the new array

function vowelIndices(word) {
  word = word.toLowerCase();
  const wordArr = word.split("");
  const indexArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (
      wordArr[i] == "a" ||
      wordArr[i] == "e" ||
      wordArr[i] == "i" ||
      wordArr[i] == "o" ||
      wordArr[i] == "u" ||
      wordArr[i] == "y"
    ) {
      indexArr.push(i + 1);
    }
  }
  return indexArr;
}
