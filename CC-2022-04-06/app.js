// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// pseudo code

// first turn string into array

// find highest and lowest values in array

// extract those values

// join the two values with a space separating them

// first try

function highAndLow(numbers) {
  const arr = numbers.split(" ");
  const numArr = arr.map((num) => (num = Number(num)));
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  console.log(max.toString() + " " + min.toString());
}

highAndLow("1 2 3 4 5");

// simplified

function highAndLow(numbers) {
  const arr = numbers.split(" ");
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${max} ${min}`;
}

//    arrow function

const highAndLow = (numbers) => {
  const arr = numbers.split(" ");
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${max} ${min}`;
};

// a smarter persons solution

const highAndLow = (numbers) => {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

// -----------------------------------------------------
