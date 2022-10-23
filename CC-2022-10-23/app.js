// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6]
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Take a look at performance: some lists have thousands of elements.
// Please ask before translating.

// parameters

// array of numbers

// results

// the sum of all array elements added to another array then removing the last item of the original array and repeating the process until its empty

// examples, see above

// psuedo code

// create a result array

// create a loop that runs until the original array is empty

// each time the loop runs, add all the array elements together and add it to the result array

// then remove the last element of the original array and repeat the process until its empty

// return the result array

function partsSums(ls) {
  const result = [];
  do {
    result.push(ls.reduce((a, b) => a + b, 0));
    ls.shift();
  } while (ls.length > 0);
  if (result[result.length - 1] != 0) {
    result.push(0);
  }
  return result;
}
