// Welcome to the Codewars Bar!
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks
// Note:

// To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

// parameters

//  a string containing numbers representing amount of drinks

// returns

// a string depending on the total count of the numbers of the initial string

// examples, see above

// pseudo code

// loop over the string

// if the current iteration is a string number, convert it to a number and add it to a total count

// return a string depending on the final count;

function hydrate(s) {
  let drinkCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      drinkCount += Number(s[i]);
    }
  }
  if (drinkCount == 1) {
    return `1 glass of water`;
  } else {
    return `${drinkCount} glasses of water`;
  }
}
