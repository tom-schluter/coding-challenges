// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// parameters

// an array

// returns

// if the array is all numbers, cube all numbers and return the sum of the odd numbers in the array, else return undefined

// examples

// assertEquals(cubeOdd([1, 2, 3, 4]), 28);

// psuedo code

// iterate over the array to see if there is a non number, if there is return undefined

// convert the array to cubed numbers

// find the odd numbers and sum them up

// return the sum

function cubeOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return undefined;
    }
  }
  let newArr = arr.map((num) => (num = Math.pow(num, 3)));
  let result = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 !== 0) {
      result += newArr[i];
    }
  }
  return result;
}
