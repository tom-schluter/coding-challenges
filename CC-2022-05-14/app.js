// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10 = 50 .

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:
// The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

// pseudo code

// create a variable without any value

// loop over the array

// if the array doesnt have any value then the value is the first array index times the second array index

// if the variable  has a value then check if the current array index times the previous array index is greater than the variable, it becomes the variable

// do the same as above but instead the current array index times the next array index

// return the value of the variable;

function adjacentElementsProduct(array) {
  let currentVal = null;
  for (let i = 0; i < array.length; i++) {
    if (currentVal == null) {
      currentVal = array[i] * array[i + 1];
    } else if (array[i] * array[i - 1] > currentVal) {
      currentVal = array[i] * array[i - 1];
    } else if (array[i] * array[i + 1] > currentVal) {
      currentVal = array[i] * array[i + 1];
    }
  }
  return currentVal;
}

// ------------------------------------------------------------

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// pseudo code

// make acounter for left and a counter for right

// iterate over the string

// identify letters and give points accordingly

// return winner

function alphabetWar(fight) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < fight.length; i++) {
    switch (fight[i]) {
      case "w":
        left += 4;
        break;
      case "p":
        left += 3;
        break;
      case "b":
        left += 2;
        break;
      case "s":
        left += 1;
        break;
      case "m":
        right += 4;
        break;
      case "q":
        right += 3;
        break;
      case "d":
        right += 2;
        break;
      case "z":
        right += 1;
        break;
      default:
        continue;
    }
  }
  if (right > left) {
    return "Right side wins!";
  } else if (left > right) {
    return "Left side wins!";
  } else {
    return "Let's fight again!";
  }
}
