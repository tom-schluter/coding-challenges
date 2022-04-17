// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// pseudo code

// add two numbers together

// convert to binary

// return as string

function addBinary(a, b) {
  let sum = a + b;
  return sum.toString(2);
}

// tostring converts to another basesystem, in this case 2 for binary

const addBinary = (a, b) => (a + b).toString(2);

// --------------------------------------------

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// check string for non digits

// check string length for 4 or 6

// return true or false accordingly

const validatePIN = (pin) =>
  (/^\d+$/.test(pin) && pin.length === 4) ||
  (/^\d+$/.test(pin) && pin.length === 6)
    ? true
    : false;
