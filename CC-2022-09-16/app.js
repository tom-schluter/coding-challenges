// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

// parameters

// an array of objects representing people and their information

// returns

// an object containing each represented programming language and the number of people that can use it

// examples, see above

// pseudo code

// create an empty object to store the results

// loop over the array

// loop over the current persons object

// if the key is language and the result object does not have the value as a key in it, make one and set it to 1

// if it does have the value as a key, add 1 to the count

// return the object

function countLanguages(list) {
  let result = {};
  list.forEach((person) => {
    Object.entries(person).forEach(([key, value]) => {
      if (key == "language" && result.hasOwnProperty(value)) {
        result[value] += 1;
      } else if (key == "language") {
        result[value] = 1;
      }
    });
  });
  return result;
}
