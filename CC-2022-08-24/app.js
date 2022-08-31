// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// parameters

// an array containing numbers

// returns

// an array containing the average between each 2 numbers in the original array

// examples, see above

// psuedo code

// create result array

// iterate over the initial array and with each iteration push the current iteration plus the next iteration divided by 2 to the result array (except the last because there is no next iteration);

// return result

function averages(numbers) {
  if (numbers == null) {
    return [];
  }
  const result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    result.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return result;
}
