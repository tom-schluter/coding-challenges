// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]

// parameters, a positive integer (m) to use as multiply number, and an integer (n) to be multiplied by M

// returns

// an array representing each multiplication from 1 to m of the number n given

// examples, see above

// psuedo code

// create an empty result array

// create a loop that starts at 1 and runs until M

// push n times current iteration to the result array

// return result array

function multiples(m, n) {
  const result = [];
  for (let i = 1; i <= m; i++) {
    let current = n;
    result.push(n * i);
  }
  return result;
}
