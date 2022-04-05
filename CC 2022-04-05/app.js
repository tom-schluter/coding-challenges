// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Psuedo code

// create counter

// itterate over string letter by letter

// compare current letter to vowel list

// if it is a vowel add 1 to counter

// return counter

// first solution using regular function and for loop

function getCount(str) {
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

//   arrow function

const getCount = (str) => {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};

// -----------------------

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// psuedo code

// method 1:
// create new empty string
// iterate over the individual characters of the given string
// check if current character is a vowel, continue loop, if not add it to the new string
// return new string
function disemvowel(str) {
  let noVowelString = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === "a" ||
      str[i].toLowerCase() === "e" ||
      str[i].toLowerCase() === "i" ||
      str[i].toLowerCase() === "o" ||
      str[i].toLowerCase() === "u"
    ) {
      continue;
    } else {
      noVowelString += str[i];
    }
  }
  return noVowelString;
}

// method 2:
// take string and replace certain characters with an empty character
// then return the updated string

const disemvowel = (str) => str.replace(/[aeiouAEIOU]/g, "");
