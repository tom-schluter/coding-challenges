// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// // Do not modify the input list.

// parameters

// array of words

// returns

// length of the longest word in the array

// examples, see above

// psuedo code

// create highest count variable

// iterate over the array

// if the current itteration is longer than the variable, the variable becomes the current itteration word length

// return the variable

const longest = (w) => {
  let h = 0;
  w.forEach((word) => {
    if (word.length > h) h = word.length;
  });
  return h;
};
