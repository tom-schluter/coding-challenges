// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// parameters

// two strings that may or may not be empty but not null

// returns

// the same two strings, but with the shorter added to both the front and the back, if length is equal than A is added to the front and back

// examples

// shorter_reverse_longer("abc", "first")
// result "abctsrifabc"

// psuedo code

// if a > b or a === b

// return a + b reversed + a

// else

// return b + a reversed +  b

function shorter_reverse_longer(a, b) {
  if (a.length > b.length || a.length === b.length) {
    return b + a.split("").reverse().join("") + b;
  } else {
    return a + b.split("").reverse().join("") + a;
  }
}
