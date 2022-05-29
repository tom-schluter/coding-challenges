// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
// pattern(5):

// 1
// 22
// 333
// 4444
// 55555
// pattern(11):

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// Hint: Use \n in string to jump to next line

// parameters

// a single integer

// returns

// a string with possible line breaks (/n) in between

// examples

// pattern(5):

// 1
// 22
// 333
// 4444
// 55555

// psuedo code

// if input is less than 1 return ""

// else create an empty array

// create a loop that counts to the given number

// create another loop within that to create a string for each number and push the result of that to the array

// join the array with \n

// return the array

function pattern(n) {
  let result = [];
  if (n < 1) {
    return "";
  }
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = 0; j < i; j++) {
      temp += i;
    }
    result.push(temp);
  }
  return result.join("\n");
}
