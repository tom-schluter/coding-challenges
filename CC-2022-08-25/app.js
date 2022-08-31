// Task
// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L ($a in PHP)
// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.

// parameters

// an array containing series of 1 and -1 representing men and women respectively

// returns

// true if there are more men that women, false otherwise

// examples, see above

// pseudo code

// make counter for men and women

// iterate over the given array, add 1 to the counter for each occurance of men and women

// return false or true according to result

function inviteMoreWomen(L) {
  let men = 0;
  let women = 0;
  L.forEach((person) => {
    if (person == -1) {
      women++;
    } else if (person == 1) {
      men++;
    }
  });
  return women >= men ? false : true;
}
