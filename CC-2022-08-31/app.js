// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// parameters

// a string of letters

// returns

// an array containing other arrays each containing a letter from the original string and how often it occurs in the string

// examples, see above

// psuedo code

// first isolate all the unique letters

// then loop over the unique letters and for each letter loop over the entire original text, if the letters match, add to a count

// put both in an array

// after finish a loop for a unique letter, push the array to a result array

// return the result array

const orderedCount = function (text) {
  const uniqueArr = [...new Set(text.split(""))];
  const result = [];
  for (let i = 0; i < uniqueArr.length; i++) {
    let temp = [uniqueArr[i], 0];
    for (let j = 0; j < text.length; j++) {
      if (uniqueArr[i] == text[j]) {
        temp[1]++;
      }
    }
    result.push(temp);
  }
  return result;
};
