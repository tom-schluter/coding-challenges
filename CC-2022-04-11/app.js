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

// ---------------------------------------

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

// psuedo code

// first we iterate over the input

// then if the letter is a T we change it to an A and the reverse. similarly if the letter is a G we change it to a C and the reverse

// then we return a new string

function DNAStrand(dna) {
  let newStr = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newStr += "T";
    } else if (dna[i] === "T") {
      newStr += "A";
    } else if (dna[i] === "G") {
      newStr += "C";
    } else if (dna[i] === "C") {
      newStr += "G";
    } else {
      newStr += "";
    }
  }
  return newStr;
}

// shorter version

const DNAStrand = (dna) => {
  let newStr = "";
  for (let i = 0; i < dna.length; i++) {
    dna[i] === "A"
      ? (newStr += "T")
      : dna[i] === "T"
      ? (newStr += "A")
      : dna[i] === "G"
      ? (newStr += "C")
      : dna[i] === "C"
      ? (newStr += "G")
      : (newStr += "");
  }
  return newStr;
};
