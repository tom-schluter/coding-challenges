// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

// parameters

// an array of integers (with duplicates)

// returns

// an array of integers without duplicates. keeping only the last (rightmost) occurrance of a duplicate element

// examples

// For input: [3, 4, 4, 3, 6, 3]

// psuedo code

// we cant spread a new set or use a normal iteration because this would remove duplicates from the rightmost, whereas we want the opposite to happen

// iterate over the array from right to left and push each element into a new array

// with each push check if the new array already has that element

// return the new array

function solve(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr.reverse();
}

// another possible way is to reverse the array, create a new set (Removes duplicates) and then return the reverse of that

const solve = (arr) => {
  arr.reverse();
  return [...new Set(arr)].reverse();
};
