// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"

// parameters

// a number representing seconds

// returns, the hours and minutes in the amount of seconds given, rounded down

// examples, see above

// pseudo code

// calculate hours

// calculate minutes from remainder of hours

// return in a sentence (template literal)

function toTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
}
