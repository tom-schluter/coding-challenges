// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

// parameters

// a string

// returns

// the same string but with each vowel replaced by the number representing their place in the string

// examples, see above

// psuedo code

// create an array of individual characters out of the string

// iterate over the array

// if current iteration is a vowel replace that with the current iteration number + 1 (because our array is 0 indexed but the expected return is not)

// return the joined version of the array

function vowel2index(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].toLowerCase() === "a" ||
      arr[i].toLowerCase() === "e" ||
      arr[i].toLowerCase() === "i" ||
      arr[i].toLowerCase() === "o" ||
      arr[i].toLowerCase() === "u"
    ) {
      let num = i + 1;
      arr[i] = num.toString();
    }
  }
  return arr.join("");
}
