// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

// parameters

// numbers representing the forces of good, and numbers representing the forces of evil. Both in string format seperated by spaces

// returns

// a string depending on who wins or if there is at tie

// examples, see above

// psuedo code

// split the strings into seperate number arrays

// go over each array and use the index for a switch case

// multiply the number of the index by the value of the race and add it to a variable

// do this for both good and evil

// return resulting based on the two numbers

function goodVsEvil(good, evil) {
  const goodArr = good.split(" ").map((num) => (num = Number(num)));
  const evilArr = evil.split(" ").map((num) => (num = Number(num)));
  let goodNr = 0;
  let evilNr = 0;
  for (let i = 0; i < goodArr.length; i++) {
    switch (i) {
      case 0:
        goodNr += 1 * goodArr[i];
        break;
      case 1:
        goodNr += 2 * goodArr[i];
        break;
      case 2:
        goodNr += 3 * goodArr[i];
        break;
      case 3:
        goodNr += 3 * goodArr[i];
        break;
      case 4:
        goodNr += 4 * goodArr[i];
        break;
      case 5:
        goodNr += 10 * goodArr[i];
        break;
    }
  }
  for (let i = 0; i < evilArr.length; i++) {
    switch (i) {
      case 0:
        evilNr += 1 * evilArr[i];
        break;
      case 1:
        evilNr += 2 * evilArr[i];
        break;
      case 2:
        evilNr += 2 * evilArr[i];
        break;
      case 3:
        evilNr += 2 * evilArr[i];
        break;
      case 4:
        evilNr += 3 * evilArr[i];
        break;
      case 5:
        evilNr += 5 * evilArr[i];
        break;
      case 6:
        evilNr += 10 * evilArr[i];
        break;
    }
  }
  return goodNr > evilNr
    ? "Battle Result: Good triumphs over Evil"
    : evilNr > goodNr
    ? "Battle Result: Evil eradicates all trace of Good"
    : "Battle Result: No victor on this battle field";
}
