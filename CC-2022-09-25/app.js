// The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

// For example, if n = 20, the resulting sequence will be:

// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.

// For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture

// parameters

// an integer

// returns

// the total count of each time  n has to be multiplied or divided

// examples, see above

// psuedo code

// write a loop that only stops once n equals 1

// each time if n is even divide n by 2 and add 1 to a counter

// each time n is odd, multiply it by 3 and + 1, also add 1 to the counter

// return the counter

function collatz(n) {
  let count = 1;
  for (let i = 0; n != 1; i++) {
    if (n % 2 == 0) {
      n = n / 2;
      count++;
    } else {
      n = n * 3 + 1;
      count++;
    }
  }
  return count;
}
