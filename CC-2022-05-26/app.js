// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// parameters

// a string containing at least a number

// returns

// a number

// examples

// ("123") --->  123
// "a1b2c3" ---> 123

// psuedo code

// iterate over the string

// identify if the current iteration is a number or not

// if yes push to new variable

// return that variable

var FilterString = function (value) {
  let num = "";
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value[i])) {
      num += value[i];
    }
  }
  return Number(num);
};
