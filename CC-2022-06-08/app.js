// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

// (courtesy of haskell.org)

// parameters

// either an array, a string or multiple arguments

// returns

// either the last element of an array if an array is given, the last character of a string if a string is given or the last argument if multiple arguments are given

// examples

// see above

// psuedo code

// if the argument is an array return the last array element

// else if there is only one argument and it is a string return the last character

// else return the last argument

function last(list) {
  if (Array.isArray(list)) {
    const last = list.pop();
    return last;
  } else if (arguments.length == 1 && typeof list == "string") {
    return list.charAt(list.length - 1);
  } else {
    return arguments[arguments.length - 1];
  }
}
