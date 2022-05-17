// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// parameters

//  input will be a year in gregorian calendar as integer

// returns

// should be a positive integer

// examples

// 2015 == 3

// 1986 == 1

// psuedo code

// we create a variable counter

// we create a for loop that goes through each month of the year

// inside the loop we make a new date out of the given year, the current loop iteration month and the 13th day

// if the date day is 5 (friday) we add to the count

// return the count
