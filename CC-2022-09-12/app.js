// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

// parameters

// object of people and their happiness value resulted in a number from 0-10, and the name of your boss

// returns

// get out now or nice work champ depending on the average happiness value (your boss counts twice)

// examples

// assert.strictEqual(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');

// psuedo code

// loop over the object

// if the current iteration key matches your bosses name, add the value of their happiness to a count twice

// if it is not your boss add the value of their happiness to the count once

// return the appropriate string based on the total count divided by the number of keys in the object

function outed(meet, boss) {
  let total = 0;
  for (const [key, value] of Object.entries(meet)) {
    if (key == boss) {
      total += value * 2;
    } else {
      total += value;
    }
  }
  if (total / Object.keys(meet).length > 5) {
    return "Nice Work Champ!";
  } else {
    return "Get Out Now!";
  }
}
