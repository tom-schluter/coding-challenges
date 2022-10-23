// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// parameters

//  a string, hypenated or underscored in between words

// returns

// the same string turned camelcase

// examples, see above

// psuedo code

// if string is empty return empty string

// if a string includes '-' remove them and capitalize each word, then join the words

// if a string includes '_' remove them and then capitalize each word, then join the words

function toCamelCase(str) {
  if (str == "") {
    return "";
  } else if (str.includes("-")) {
    let arr = str.split("-");
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
  } else {
    let arr = str.split("_");
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
  }
}
