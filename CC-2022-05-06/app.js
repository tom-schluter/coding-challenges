// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// psuedo code

// create variables for team one and team two

// loop over the array to add the weight of every other person starting count from 0

// loop over the array again starting count from one

// add weights accordingly

// return as array

function rowWeights(array) {
  let team1 = 0;
  let team2 = 0;
  let result = [];
  for (let i = 0; i < array.length; i += 2) {
    team1 += array[i];
  }
  for (let i = 1; i < array.length; i += 2) {
    team2 += array[i];
  }
  result.push(team1, team2);
  return result;
}
