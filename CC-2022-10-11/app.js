// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// parameters

// a string

// returns

// each character that appears more than once replaced by ")" and the others by "("

// examples, see above

// pseudo code

// create variable to hold result string

// loop over the string by character

// loop over it again by character

// compare first loop to match any of the second loop and if its more than one match add ) to the result string

// otherwise add (

// return result string

function duplicateEncode(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i].toLowerCase() == word[j].toLowerCase()) {
        count++;
      }
    }
    if (count > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}
