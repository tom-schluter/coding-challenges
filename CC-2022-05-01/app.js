// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// psuedo code

// determine if the number is positive or negative

// if positive iterate over the number until the number is divisible by 5 and return that number

// if the number is negative do the same but subtract instead of add

function roundToNext5(n) {
  let result = n;
  if (n === 0) {
    return 0;
  } else if (n % 5 === 0) {
    return n;
  } else {
    do {
      result++;
    } while (result % 5 !== 0);
  }
  return result;
}

// the much simpler version

function roundToNext5(n) {
  while (n % 5 !== 0) n++;
  return n;
}

// ---------------------------------------------------

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// psuedo code

// make a result variable

// compare the two arrays, if equal result +4 if not -1, if blank continue;

// at the end return score, if under 0 return 0

function checkExam(array1, array2) {
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result += 4;
    } else if (array2[i] === "") {
      continue;
    } else {
      result--;
    }
  }
  if (result < 0) {
    result = 0;
  }
  return result;
}
