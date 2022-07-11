// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as String
// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 81 + 92 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

// parameters

// a number

// returns

// if the sum of each individual digit, mulitipled to the power of the position of the whole number it is in, is equal to the whole number, return disarium. Otherwise return Not

// examples, see above

// pseudo code

// create an array of individual digits from the whole number

// create a variable to hold the sum of the individual digits (mulitplied to the power of ...);

// create a loop that iterates over the array, adding the current number of the array it is on to the variable, but mulitplied by the current array loop + 1

// check if the final number is equal to the initial number given as argument

// return accordingly

function disariumNumber(n) {
  const arrOfDigits = Array.from(String(n), Number);
  let currentNum = 0;
  for (let i = 0; i < arrOfDigits.length; i++) {
    currentNum += Math.pow(arrOfDigits[i], i + 1);
  }
  return currentNum == n ? "Disarium !!" : "Not !!";
}
