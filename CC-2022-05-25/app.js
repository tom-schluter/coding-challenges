// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1

// parameters

// two integers, one positive or negative and one from zero and up

// returns

// a positive or negative integer

// examples

// 5673, 4 --> 5
// 129, 2 --> 2

// psuedo code

// if nth is negative return -1

// else

// if num is negative turn it positive

// iterate over the number, from the back to the front

// stop at the nth given number

// return that number

// wrong answer

// var findDigit = function(num, nth){
//     if (nth < 0) {
//       return -1;
//     };
//     if (num < 0) {
//       num = num * -1;
//     }
//     let result = num.toString();
//     if (result.length-nth < 0) {
//       return 0
//       } else {
//     return Number(result.substr(result.length-nth, 1));
//         }
// }

// -----------------------------------------------------------------

// Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"

// caffeineBuzz(1)   => "mocha_missing!"
// caffeineBuzz(3)   => "Java"
// caffeineBuzz(6)   => "JavaScript"
// caffeineBuzz(12)  => "CoffeeScript"
