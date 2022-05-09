// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// psuedo code

// compare the initial array to a sorted ascending array

// compare the initital array t oa sorted descending array

// elsewise return no

function isSortedAndHow(array) {
  let ascending = [...array].sort((a, b) => a - b);
  let descending = [...array].sort((a, b) => b - a);
  if (array.toString() == ascending.toString()) {
    return "yes, ascending";
  } else if (array.toString() == descending.toString()) {
    return "yes, descending";
  } else {
    return "no";
  }
}

// -----------------------------------------------------

// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

sortme = function (names) {
  return names.sort();
};
