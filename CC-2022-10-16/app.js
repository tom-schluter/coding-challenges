// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// parameters

// array of integers

// returns

// the same array but odd numbers sorted in ascending order and even numbers retained in their original position

// examples, see above

// psuedo code

// create an array of the odd numbers of the original array

// sort that new array in ascending order

// go over the original array and if the current iteration is positive, insert it in the new array at the same index as it was in the original array

// return the new array

function sortArray(array) {
  let odd = [];
  array.forEach((num) => {
    if (num % 2 != 0) {
      odd.push(num);
    }
  });
  odd.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      odd.splice(i, 0, array[i]);
    }
  }
  return odd;
}
