// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

// Examples
// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30

// parameters

// first an array of numbers, then another number representing to what power the original array of numbers has to be converted

// returns

// the sum of the original array subtracted from the modified array

// examples, see above

// psuedo code

// create a variable that holds the value of all the original arrays numbers added

// create another variable that holds the value of all the original arrays numbers (to the nth power) added

// subtract the former from the latter

function modifiedSum(a, n) {
  const original = a.reduce((a, b) => a + b, 0);
  const nth = a
    .map((num) => (num = Math.pow(num, n)))
    .reduce((a, b) => a + b, 0);
  return nth - original;
}
