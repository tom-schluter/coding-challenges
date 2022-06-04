// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// parameters

// a string of characters

// returns

// the same string but uppercase and lowercase switched

// examples Hello World -> hELLO wORLD

// psuedo code

// iterate over the string

// if a character is uppercase turn it lowerCase

// if a character is lowerCase turn it upperCase

// return the string

const alternateCase = (s) => {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      newStr += s[i].toLowerCase();
    } else {
      newStr += s[i].toUpperCase();
    }
  }
  return newStr;
};
