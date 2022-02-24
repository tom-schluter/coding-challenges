// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

// parameters

// a string of characters always greater than 0, without spaces, size is always positive

// returns

// the same string but with spaces added between each 'partlength' character

// examples 'supercalifragilisticexpialidocious', partlength 3

// 'sup erca lif ragi lis tic exp ial ido cio us'

// psuedo code

// create an empty array

// iterate over the given string but parts of 'partlength'

// push those chunks to the empty array

// return the array joined by spaces as a string

var splitInParts = function (s, partLength) {
  let seperatedArr = [];
  for (let i = 0; i < s.length; i += partLength) {
    seperatedArr.push(s.substring(i, i + partLength));
  }
  return seperatedArr.join(" ");
};
