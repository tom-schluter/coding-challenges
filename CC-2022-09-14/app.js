// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// parameters

// an object containing people and their current activities

// returns

// a sentence based on the total score of boredom

// examples

// Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' }), 'kill me now');

// psuedo code

// loop over the object

// compare current iteration to the table of appropriate scores and add the score to a total

// return the appropriate sentence based on the final score

function boredom(staff) {
  let total = 0;
  Object.entries(staff).forEach(([key, value]) => {
    switch (value) {
      case "accounts":
        total += 1;
        break;
      case "finance":
        total += 2;
        break;
      case "canteen":
        total += 10;
        break;
      case "regulation":
        total += 3;
        break;
      case "trading":
        total += 6;
        break;
      case "change":
        total += 6;
        break;
      case "IS":
        total += 8;
        break;
      case "retail":
        total += 5;
        break;
      case "cleaning":
        total += 4;
        break;
      default:
        total += 25;
    }
  });
  if (total <= 80) {
    return "kill me now";
  } else if (total < 100) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}
