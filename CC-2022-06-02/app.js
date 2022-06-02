// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// parameters

// a string of characters, capital and/or lowercase

// return

// an integer representing the sum of all ASCII character codes minus the sum of all ASCII character codes where all 7s are replaced by 1s

// examples

// see above

// psuedo code

// first get a total one value by iterating over the initial string and adding the ASCII character codes

// do the same for total two value

// iterate over total two and replace the 7s by 1s

// return the subtraction of the two variables

function calc(x) {
  let totalOne = "";
  for (let i = 0; i < x.length; i++) {
    totalOne += x.charCodeAt(i);
  }
  let totalTwo = totalOne.replace(/7/g, "1");
  return (
    totalOne.split("").reduce((a, b) => Number(a) + Number(b), 0) -
    totalTwo.split("").reduce((a, b) => Number(a) + Number(b), 0)
  );
}
