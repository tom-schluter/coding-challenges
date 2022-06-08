// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!

// parameters

// array filled with integers or empty

// returns

// the difference between the highest and lowest values given, if none are given return 0

// examples

// see above

// psuedo code

// identify the highest value

// identify the lowest value

// subtract one from the other and return it, if initial array is empty return 0

const maxDiff = (list) =>
  list.length === 0 ? 0 : Math.max(...list) - Math.min(...list);
