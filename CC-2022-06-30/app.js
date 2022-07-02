// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// parameters

//  a string

// returns

// the same string with spaces in between each character

// examples, see above

// pseudo code

// split the string then join it with spaces between

const spacify = (str) => str.split("").join(" ");
