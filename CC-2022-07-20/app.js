// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// parameters

// array of numbers

// returns

// "WIN" or "LOSE" depending on if the letters B I N G O are present in the array (their number counterparts)

// examples

// Test.assertEquals( bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
// Test.assertEquals( bingo([21,13,2,7,5,14,7,15,9,10]), "WIN");

// psuedo code

// check if the array includes all the numbers

// return win or lose appropraitely

const bingo = (a) =>
  a.includes(2) &&
  a.includes(9) &&
  a.includes(14) &&
  a.includes(7) &&
  a.includes(15)
    ? "WIN"
    : "LOSE";
