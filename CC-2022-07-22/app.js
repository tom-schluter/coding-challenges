// Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

// For example:

// toLeetSpeak("LEET") returns "1337"
// In this kata we use a simple LeetSpeak dialect. Use this alphabet:

// {
//   A : '@',
//   B : '8',
//   C : '(',
//   D : 'D',
//   E : '3',
//   F : 'F',
//   G : '6',
//   H : '#',
//   I : '!',
//   J : 'J',
//   K : 'K',
//   L : '1',
//   M : 'M',
//   N : 'N',
//   O : '0',
//   P : 'P',
//   Q : 'Q',
//   R : 'R',
//   S : '$',
//   T : '7',
//   U : 'U',
//   V : 'V',
//   W : 'W',
//   X : 'X',
//   Y : 'Y',
//   Z : '2'
// }

// parameters

// a string containing only capital letters and spaces

// returns

// the same string in "leetspeak";

// examples

// see above

// psuedo code

// create a result variable and set it to an empty string

// iterate over the original string

// change the current iteration to its leetspeak equivelant and add it to the result string

// if the equivelant is the same as the original just default to passing the original to the result string

// return the result string

function toLeetSpeak(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        result += "@";
        break;
      case "B":
        result += "8";
        break;
      case "C":
        result += "(";
        break;
      case "E":
        result += "3";
        break;
      case "G":
        result += "6";
        break;
      case "H":
        result += "#";
        break;
      case "I":
        result += "!";
        break;
      case "L":
        result += "1";
        break;
      case "O":
        result += "0";
        break;
      case "S":
        result += "$";
        break;
      case "T":
        result += "7";
        break;
      case "Z":
        result += "2";
        break;
      default:
        result += str[i];
    }
  }
  return result;
}
