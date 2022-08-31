// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

// Your Task
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
// Example (Input --> Output)
// 0 --> 0
// 5 --> 5
// 10 --> 10

// parameters

// number representing amount of eggs to boil

// returns

// number representing minutes needed to boil all eggs

// examples, see above

// pseudo code

// if eggs is 0 return 0

// if its less than 8 eggs return 5

// if its more than 8 eggs create a loop that adds 5 minutes per 8 eggs and returns the total

function cookingTime(eggs) {
  let count = 0;
  if (eggs == 0) {
    return 0;
  } else if (eggs <= 8) {
    return 5;
  } else {
    for (let i = 0; i < eggs; i += 8) {
      count += 5;
    }
    return count;
  }
}
