// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// The number passed to the function is positive
// Input >> Output Examples
// autoMorphic (25) -->> return "Automorphic"
// Explanation:
// 25 squared is 625 , Ends with the same number's digits which are 25 .

// autoMorphic (13) -->> return "Not!!"
// Explanation:
// 13 squared is 169 , Not ending with the same number's digits which are 69 .

// autoMorphic (76) -->> return "Automorphic"
// Explanation:
// 76 squared is 5776 , Ends with the same number's digits which are 76 .

// autoMorphic (225) -->> return "Not!!"
// Explanation:
// 225 squared is 50625 , Not ending with the same number's digits which are 225 .

// autoMorphic (625) -->> return "Automorphic"
// Explanation:
// 625 squared is 390625 , Ends with the same number's digits which are 625 .

// autoMorphic (1) -->> return "Automorphic"
// Explanation:
// 1 squared is 1 , Ends with the same number's digits which are 1 .

// autoMorphic (6) -->> return "Automorphic"
// Explanation:
// 6 squared is 36 , Ends with the same number's digits which are 6

// parameters

// a number

// returns

// automorphic if the given number squared ends in the initial number given

// examples, see above

// psuedo code

// store the initial number squared (and turned into a string) in a variable

// store the initial number as a string in a variable

// take the length of the initial number off the end of the squared number and compare that part to the initial number given

// if its the same return Automorphic, otherwise Not!!

function automorphic(n) {
  let squared = Math.pow(n, 2).toString();
  let stringN = n.toString();
  let nLength = stringN.length;
  if (
    squared.substr(squared.length - nLength, squared.length - 1) == stringN ||
    n == 1
  ) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}
