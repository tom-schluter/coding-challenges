// Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"

// caffeineBuzz(1)   => "mocha_missing!"
// caffeineBuzz(3)   => "Java"
// caffeineBuzz(6)   => "JavaScript"
// caffeineBuzz(12)  => "CoffeeScript

// parameters

// a non negative integer

// returns

// a string depending on the divisibility of the number

// examples, see above

// psuedo code

// check if n is divisible by 3 and 4 and 2, return appropriate answer

// check if n is divisible by 3 and 4, return answer

// check if n is divisible by 3 and 2, return answer

// check if n is divisible by 3, return answer

// else return mocha_missing! string

function caffeineBuzz(n) {
  if (n % 3 == 0 && n % 4 == 0 && n % 2 == 0) {
    return "CoffeeScript";
  } else if (n % 3 == 0 && n % 4 == 0) {
    return "Coffee";
  } else if (n % 3 == 0 && n % 2 == 0) {
    return "JavaScript";
  } else if (n % 3 == 0) {
    return "Java";
  } else {
    return "mocha_missing!";
  }
}
