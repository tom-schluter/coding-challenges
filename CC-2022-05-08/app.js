// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {
  name = name.toLowerCase();
  const capital = name.charAt(0).toUpperCase() + name.slice(1);
  return `Hello ${capital}!`;
};

// alltogether

const greet = (name) =>
  `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;

//   ----------------------------------------------------------------------

// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

const sortGiftCode = (code) => code.split("").sort().join("");

// ------------------------------------------------------------------------------

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// use recursion

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
