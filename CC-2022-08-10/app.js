// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// parameters

// a string sentence

// returns

// the same sentence but each word reversed

// examples, see above

// psuedo code

// extract the words and put them into an array

// iterate over the array and reverse each word, as its reversed add it to a result string

// maintain spaces

const reverseWords = (str) => {
  let result = "";
  let words = str.split(" ");
  words.forEach((word) => {
    for (let i = word.length - 1; i >= 0; i--) {
      result += word[i];
    }
    result += " ";
  });
  return result.slice(0, -1);
};
