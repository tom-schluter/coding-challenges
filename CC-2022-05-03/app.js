// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

// psuedo code

// create a total count

// create a loop that runs until the given number

// add to the count

// fix it all in a weird ass string

let total = 0;
let string = "";
if (count === 0) {
  return "0=0";
} else if (count < 0) {
  return `${count}<0`;
} else {
  for (let i = 0; i <= count; i++) {
    if (i !== count) {
      total += i;
      string += `${i}+`;
    } else {
      total += i;
      string += `${i} = `;
    }
  }
  return `${string}${total}`;
}
