// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// psuedo code

// turn the number into a string and return string.length;

const digits = (n) => n.toString().length;

// --------------------------------------------

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// psuedo code

// split the string to array

// iterate over array and count instances of n

// if greater than n return appropriate response

const bump = (x) => {
  let counter = 0;
  x = x.split("");
  x.forEach((letter) => {
    if (letter === "n") counter++;
  });
  if (counter > 15) {
    return "Car Dead";
  } else {
    return "Woohoo!";
  }
};
