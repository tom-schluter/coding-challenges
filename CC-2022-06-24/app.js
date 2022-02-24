// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// parameters

// a string of any length

// returns

// if the string is less than 4 characters return an error

// if the 3rd letter is a consonant return the first 3 letters

// if the 3rd letter is a vowel return the first 4 letters

// examples, see above

// psuedo code

// if name is too short return error

//  else if 3rd letter is a vowel return substring first 3 chars

//  else return first 4 chars

const nicknameGenerator = (name) => {
  if (name.length < 4) {
    return "Error: Name too short";
  } else if (
    name[2] === "a" ||
    name[2] === "e" ||
    name[2] === "i" ||
    name[2] === "o" ||
    name[2] === "u"
  ) {
    return name.substring(0, 4);
  } else {
    return name.substring(0, 3);
  }
};
