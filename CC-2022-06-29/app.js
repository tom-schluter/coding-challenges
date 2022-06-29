// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// parameters

// an array of numbers

// returns

// the rounded average of the array of numbers

// pseudo code

// since we're not allowed to use loops we can use the reduce function to add up all the individual numbers of the array

// then divide by the length of the array

// round the resulting number

const average = (scores) =>
  Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
