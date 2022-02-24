// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// parameters

//  a string or array

// returns

// the same string or array but neighbouring duplicates removed and the original order retained and returned as array

// examples, see above

// psuedo code

// iterate over the argument and if the current iteration does not equal the last iteration, push it to an array

// return that array

var uniqueInOrder = function (iterable) {
  const arr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i - 1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
};
