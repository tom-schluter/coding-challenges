// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// FUNDAMENTALS

// parameters

//  a string of numbers

// returns

// a string saying wether or not the total of even numbers was greater than the total of odd numbers, the other way around or if they were the same

// examples

// evenOrodd(1234) = > even is greater than odd
// because 1+3 = 4 and 2+4 = 6

// psuedo code

// split the string into an array

// make variables for the total of odd numbers and total of even numbers

// iterate over the array, if the current iteration is even add it to the even count, else add it to the odd count

// compare the 2 variables and return the appropriate result

function evenOrOdd(str) {
  const numArr = str.split("");
  let odd = 0;
  let even = 0;
  numArr.forEach((num) =>
    num % 2 == 0 ? (even = even + Number(num)) : (odd = odd + Number(num))
  );
  if (even > odd) {
    return "Even is greater than Odd";
  } else if (odd == even) {
    return "Even and Odd are the same";
  } else {
    return "Odd is greater than Even";
  }
}
