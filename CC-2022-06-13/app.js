// Given a string, swap the case for each of the letters.

// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

// parameters

// a random string

// returns

// the same string but with any letters having their case swapped

// examples, see above

// psuedo code

// create a new variable to hold the case swapped string

// iterate over the initial given string

// see if the currnt characters is lowercase, if it is turn it uppercase

// else turn it lowercase

// return the swapped variable

function swap(str) {
  let swapped = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      swapped += str[i].toUpperCase();
    } else {
      swapped += str[i].toLowerCase();
    }
  }
  return swapped;
}
