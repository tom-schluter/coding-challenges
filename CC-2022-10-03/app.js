// The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

// Example:

// solution('Testing String', 3) --> 'Tes...'
// solution('Testing String', 8) --> 'Testing ...'
// solution('Test', 8)           --> 'Test'

// parameters

// a string and a length at which it should be truncated

// returns

// the string truncated unless the initial string was already within the maximum length given

// examples, see above

// psuedo code

// check if the truncated version is shorter than the original

// if it is return template literal string with truncated version

// else return original string

function solution(string, limit) {
  let truncated = string.substr(0, limit);
  if (truncated.length < string.length) {
    return `${truncated}...`;
  } else {
    return string;
  }
}

// shorter

const solution = (s, l) =>
  s.substr(0, l).length < s.length ? `${s.substr(0, l)}...` : s;
