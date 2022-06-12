// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// paramters

// an array of numbers and strings that represent numbers

// returns

// the total of string numbers subtracted from the total of numbers in the initial given array

// examples

// [9, 3, '7', '3'] =>  2

// psuedo code

// create stringtotal and numtotal variables and set them to 0

// iterate over the array, if the current array element has a type of string than convert that to a number and add it to the string total, otherwise dont convert it and directly add it to the number total

// return the number total minus the string total

function divCon(x) {
  let stringTotal = 0;
  let numTotal = 0;
  x.forEach((e) =>
    typeof e === "string" ? (stringTotal += Number(e)) : (numTotal += e)
  );
  return numTotal - stringTotal;
}
