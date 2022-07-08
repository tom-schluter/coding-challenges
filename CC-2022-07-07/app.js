// Task
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

// * 'Hello world'   => true
// * ' Hello world'  => false
// * 'Hello world  ' => false
// * 'Hello  world'  => false
// * 'Hello'         => true

// Even though there are no spaces, it is still valid because none are needed:
// * 'Helloworld'    => true
// * 'Helloworld '   => false
// * ' '             => false
// // * ''              => true

// parameters

// a string

// returns

// true or false depending on if the string starts or ends with a space (false), has double spaces (false) or not (true)

// examples, see above

// psuedo code

// check first and last char for spaces

// check string for double spaces

// return true or false accordingly

function validSpacing(s) {
  if (s[0] == " " || s.charAt(s.length - 1) == " ") {
    return false;
  } else if (/\s{2}/.test(s)) {
    return false;
  } else {
    return true;
  }
}
