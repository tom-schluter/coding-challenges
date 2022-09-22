// This Kata is intended as a small challenge for my students

// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""

// parameters

// a string

// return

// the same string but all vowels removed

// examples, see above

// psuedo code

// loop over the string

// if current iteration is not a vowel add it to a result string

// return result string;

var removeVowels = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] != "a" &&
      str[i] != "e" &&
      str[i] != "i" &&
      str[i] != "o" &&
      str[i] != "u"
    ) {
      result += str[i];
    }
  }
  return result;
};
