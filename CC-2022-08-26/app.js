// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.

// parameters

// a number representing a distance

// returns

// the amount of times a paper needs to be folded to reach the distance

// examples

// foldTo(384000000) ---> 42);

// psuedo code

// if distance is less than 0 return null

// add a counter variable

// create a loop that starts at 0.0001 and multiplies itself each occurrance and run it until it reaches the distance

// with each iteration add 1 to the counter

// return the counter

function foldTo(distance) {
  if (distance < 0) {
    return null;
  }
  let count = 0;
  for (let i = 0.0001; i < distance; i *= 2) {
    count++;
  }
  return count;
}
