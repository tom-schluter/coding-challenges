// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00

// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// psuedo code

// first check if the starting point is equal to the end point, if it is return 0 years

// make a loop that runs until the required amount is achieved, every time the loop runs add 1 to a counter

// apply the formula in the loop

// return the counter total

function calculateYears(principal, interest, tax, desired) {
  let count = 0;
  if (principal === desired) {
    return 0;
  }
  for (let i = 0; principal <= desired; i++) {
    let interestCalc = 0;
    interestCalc = principal * interest;
    interestCalc = interestCalc - interestCalc * tax;
    principal += interestCalc;
    count++;
  }
  return count;
}

// ----------------------------------------------

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// if array is empty return empty array

// else apply array sort

// return array

function solution(nums) {
  if (nums === null || nums.length === 0) {
    return [];
  }
  nums = nums.sort((a, b) => a - b);
  return nums;
}

const solution = (nums) =>
  nums === null
    ? []
    : nums.length === 0
    ? []
    : (nums = nums.sort((a, b) => a - b));
