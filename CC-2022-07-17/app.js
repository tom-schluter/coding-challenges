// Task
// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

// Input
// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

// Example
// generateIntegers(2, 5) // --> [2, 3, 4, 5]

// parameters

// starting and stopping number, stopping number always greater

// returns

// array counting from start to stop

// examples, see above

// psuedo code

// create empty arr

// loop from starting number to stop

// push iteration to arr

// return arr

function generateIntegers(m, n) {
  const res = [];
  for (let i = m; i <= n; i++) {
    res.push(i);
  }
  return res;
}
