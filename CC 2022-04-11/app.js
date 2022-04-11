// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// psuedo code

// first make uppercase or lowercase to disregard capitalization

// we can iterate over the letters and check if there is already an instance of the letter

// if yes return false if no return true

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (str[j] === str[i]) {
        return false;
      }
    }
  }
  return true;
}

// in the above solution we check each letter against the rest of the letters to find a match
