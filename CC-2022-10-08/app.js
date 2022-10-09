// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// parameters

// non-negative integer

// returns

// the number of 1's in the binary conversion of the given integer

// examples, see above

// pseudo code

// convert the integer to binary

// turn the binary number into a string

// loop over each character and if it's a 1 add it to a counter variable

// return the counter variable

var countBits = function (n) {
  let binary = n.toString(2);
  let oneCount = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == "1") {
      oneCount++;
    }
  }
  return oneCount;
};
