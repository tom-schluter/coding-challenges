// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

// parameters

// a string of numbers

// returns

// the same string but any 9 with a 7 before and after removed

// examples, see above

// psuedo code

// split up the string

// loop over it

// if the current iteration is a 9 with a 7 before and after, do nothing

// otherwise push the current iteration to a new array or string

// return at the end

function sevenAte9(str) {
  let arr = str.split("");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "9" && arr[i - 1] == "7" && arr[i + 1] == 7) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result.join("");
}
