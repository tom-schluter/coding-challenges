// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// parameters

// 2 arrays with numbers

// returns

// the first array with all the similar elements to the second array removed from it

// examples, see above

// psuedo code

// create a result array

// iterate over the first array

// if the current iteration is not included in the second array, push it to the result array

// return the result array

function arrayDiff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}
